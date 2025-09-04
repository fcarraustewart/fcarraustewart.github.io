
import React, { useState, useEffect } from "react";
import { useBLE } from "./useBLE";
import EmptyParticles from "./EmptyParticles.jsx";
import { BandPassFilter } from "./BpFFilter.js";
import FilteredDataChart from "./FilteredDataChart";
import { Float32BufferAttribute } from "three/src/Three.Core.js";

const ParticleVessel = () => {
  const { connect, disconnect, isConnected, sendCommand } = useBLE();
  const [rawValue, setRawValue] = useState(null);
  const [sensorValue, setSensorValue] = useState(0);
  const [filteredValue, setFilteredValue] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [simulate, setSimulate] = useState(false);
  const [imuValues, setImuValues] = useState({ roll: 0, pitch: 0, yaw: 0 });

  const SAMPLE_RATE = 100; // Hz
  const CUTOFF = 1.0; // Hz
  const HCUTOFF = 2.5; // Hz
  const lpf = new BandPassFilter(CUTOFF, HCUTOFF, SAMPLE_RATE);

  useEffect(() => {
    if (!simulate) return;

    let t = 0;
    const interval = setInterval(() => {
      // simulate BPM ~ 70–90
      const bpm = 75 + Math.sin(t / 20) * 5; 
      const freq = bpm / 60; // Hz
      const heartWave =
        Math.max(0, Math.sin(2 * Math.PI * freq * (t / 60))) ** 4; 
      // add jitter noise
      const noise = Math.random() * 0.1;
      const value = heartWave * 50 + noise * 10;

      setSensorValue(value);
      t += 1;
    }, 30); // update ~33 FPS

    return () => clearInterval(interval);
  }, [simulate]);

  const handleConnect = async () => {    
    // TODO: replace with your real UUIDs
    const HRM_SERVICE_UUID = "0000180d-0000-1000-8000-00805f9b34fb";
    const HRM_CHARACTERISTIC_UUID = "12345678-1234-5678-1234-46789fffffff"; 

    const IMU_SERVICE_UUID = "12345678-1234-5678-1234-66789abcdef0";
    const IMU_CHARACTERISTIC_UUID = "12345678-1234-5678-1234-66789abcdef4"; // IMU Angles Data
    
    await connect(HRM_SERVICE_UUID, HRM_CHARACTERISTIC_UUID, (value) => {
      const raw = value.getFloat32(0, true);
      const filtered = lpf.process(raw);
      setRawValue(raw);
      setFilteredValue(filtered);
    });
    await connect(IMU_SERVICE_UUID, IMU_CHARACTERISTIC_UUID, (value) => {
      const data = new Float32Array(value.buffer.slice(0, 12));
      setImuValues({
        roll: data[0],
        pitch: data[1],
        yaw: data[2],
      });
    });
  };

  const toggleStream = () => {
    if (!isConnected) return;
    sendCommand(isStreaming ? 0x00 : 0x01);
    setIsStreaming((s) => !s);
  };

  return (
    <div 
    style={{
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    }}
    // className="flex flex-col items-center space-y-4"
    
    >
      {/* Controls */}
      <div className="flex flex-col items-center space-y-4">
        <button onClick={isConnected ? disconnect : handleConnect}>
          {isConnected ? "Disconnect BLE" : "Connect BLE"}
        </button>
        <button
          onClick={() => setSimulate(!simulate)}
        >
          {simulate ? "Stop Simulation" : "Simulate Heart Sensor"}
        </button>
        {isConnected && (
          <button onClick={toggleStream} style={{ marginLeft: 8 }}>
            {isStreaming ? "Stop" : "Play"}
          </button>
        )}{/* Debug Overlay */}
        <div
          style={{
            position: "relative",
            width: 100,
            height: 100,
            padding: "8px",
            borderRadius: 8,
            background: "rgba(240,238,230,0.78)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 8px 10px rgba(0,0,0,0.18)",
            zIndex: 20,
            userSelect: "none",
          }}
        >
          <pre>
            Roll: {imuValues.roll?.toFixed(1)}°
            {"\n"}
            Pitch: {imuValues.pitch?.toFixed(1)}°
            {"\n"}
            Yaw: {imuValues.yaw?.toFixed(1)}°
            {"\n"}
            Heart: {(simulate ? sensorValue/5: rawValue/100)}{" "}
          </pre>
        </div>
        {/* Background animation (driven by filtered) */}
        <EmptyParticles sensorValue={simulate ? sensorValue/5: rawValue/100} imu = { imuValues } />
        
      </div>


      {/* Draggable chart widget (bottom-center by default) */}
      <FilteredDataChart
        rawValue={simulate ? sensorValue: rawValue}
        filteredValue={simulate ? sensorValue: filteredValue}
        sampleRateHz={SAMPLE_RATE}
      />
    </div>
  );
};

export default ParticleVessel;
