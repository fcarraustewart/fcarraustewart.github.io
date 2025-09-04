
import React, { useState, useEffect } from "react";
import { useBLE } from "./useBLE";
import EmptyParticles from "./EmptyParticles.jsx";
import { BandPassFilter } from "./BpFFilter.js";
import FilteredDataChart from "./FilteredDataChart";

const ParticleVessel = () => {
  const { connect, disconnect, isConnected, sendCommand } = useBLE();
  const [rawValue, setRawValue] = useState(null);
  const [sensorValue, setSensorValue] = useState(0);
  const [filteredValue, setFilteredValue] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [simulate, setSimulate] = useState(false);

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
    const SERVICE_UUID = "0000180d-0000-1000-8000-00805f9b34fb";
    const CHARACTERISTIC_UUID = "12345678-1234-5678-1234-46789fffffff"; 

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
    <div className="flex flex-col items-center space-y-4">
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
        )}
        {/* Draggable chart widget (bottom-center by default) */}
        <FilteredDataChart
          rawValue={simulate ? sensorValue: rawValue}
          filteredValue={simulate ? sensorValue: filteredValue}
          sampleRateHz={SAMPLE_RATE}
        />
        {/* Background animation (driven by filtered) */}
        <EmptyParticles sensorValue={simulate ? sensorValue: rawValue} />
      </div>


    </div>
  );
};

export default ParticleVessel;
