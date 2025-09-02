
import React, { useState } from "react";
import { useBLE } from "./useBLE";
import EmptyParticles from "./EmptyParticles";
import { BandPassFilter } from "./BpFFilter.js";
import FilteredDataChart from "./FilteredDataChart";

const ParticleVessel = () => {
  const { connect, disconnect, isConnected, sendCommand } = useBLE();
  const [rawValue, setRawValue] = useState(null);
  const [filteredValue, setFilteredValue] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const SAMPLE_RATE = 100; // Hz
  const CUTOFF = 1.0; // Hz
  const HCUTOFF = 2.5; // Hz
  const lpf = new BandPassFilter(CUTOFF, HCUTOFF, SAMPLE_RATE);

  const handleConnect = async () => {    
    // TODO: replace with your real UUIDs
    const SERVICE_UUID = "0000180d-0000-1000-8000-00805f9b34fb";       // Example
    const CHARACTERISTIC_UUID = "12345678-1234-5678-1234-46789fffffff"; // Exampleimport React, { useState } from "react";

    await connect(SERVICE_UUID, CHARACTERISTIC_UUID, (value) => {
      const raw = value.getFloat32(0, true);
      const filtered = lpf.process(raw);
      setRawValue(raw);
      setFilteredValue(filtered);
    });
  };

  const toggleStream = () => {
    if (!isConnected) return;
    sendCommand(isStreaming ? 0x00 : 0x01);
    setIsStreaming((s) => !s);
  };

  return (
    <div>
      {/* Controls */}
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 30 }}>
        <button onClick={isConnected ? disconnect : handleConnect}>
          {isConnected ? "Disconnect BLE" : "Connect BLE"}
        </button>
        {isConnected && (
          <button onClick={toggleStream} style={{ marginLeft: 8 }}>
            {isStreaming ? "Stop" : "Play"}
          </button>
        )}
      </div>

      {/* Draggable chart widget (bottom-center by default) */}
      <FilteredDataChart
        rawValue={rawValue}
        filteredValue={filteredValue}
        sampleRateHz={SAMPLE_RATE}
      />

      {/* Background animation (driven by filtered) */}
      <EmptyParticles sensorValue={rawValue/100 ?? 0} />
    </div>
  );
};

export default ParticleVessel;
