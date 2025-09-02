import { useState, useRef } from "react";

export function useBLE() {
  const [device, setDevice] = useState(null);
  const [server, setServer] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const characteristicStreamPlayPause = useRef(null);

  const connect = async (serviceUUID, characteristicUUID, onValueChange) => {
    try {
    //   const device = await navigator.bluetooth.requestDevice({
    //     filters: [{ services: [serviceUUID] }],
    //     optionalServices: [serviceUUID],
    //   });
      // Need this to get Service Stream after:
      const SERVICE_STREAM_UUID = "12345678-1234-5678-1234-46789abcdef0";
      const CHARACTERISTIC_STREAM_UUID = "12345678-1234-5678-1234-46789abcdef1";

      const device = await navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: "M0" }],
        optionalServices: [serviceUUID,SERVICE_STREAM_UUID], // still include if you need to read/notify after connecting
      });
      
      setDevice(device);

      const server = await device.gatt.connect();
      setServer(server);

      const service = await server.getPrimaryService(serviceUUID);
      const characteristic = await service.getCharacteristic(characteristicUUID);

      const serviceStreamPlayPause = await server.getPrimaryService(SERVICE_STREAM_UUID);
      const characteristicStream = await serviceStreamPlayPause.getCharacteristic(CHARACTERISTIC_STREAM_UUID);
      characteristicStreamPlayPause.current = characteristicStream;

      await characteristic.startNotifications();
      characteristic.addEventListener("characteristicvaluechanged", (event) => {
        const value = event.target.value; // DataView
        onValueChange(value);
      });

      setIsConnected(true);
    } catch (error) {
      console.error("BLE Connection failed", error);
    }
  };

  const disconnect = () => {
    if (device && device.gatt.connected) {
      device.gatt.disconnect();
    }
    setIsConnected(false);
  };

  // ✅ New: sendCommand to write a single byte (0x00 = stop, 0x01 = start)
  const sendCommand = async (byteVal) => {
    if (!characteristicStreamPlayPause.current) return;
    try {
      const command = new Uint8Array([byteVal]);
      await characteristicStreamPlayPause.current.writeValueWithoutResponse(command);
      console.log("Command sent:", byteVal);
    } catch (err) {
      console.error("Failed to send command", err);
    }
  };

  return { device, server, isConnected, connect, disconnect, sendCommand };
}
