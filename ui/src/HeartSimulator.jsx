import React, { useState, useEffect } from "react";
import EmptyParticles from "./EmptyParticles";
import FilteredDataChart from "./FilteredDataChart";

const HeartSimulator = () => {
  const [sensorValue, setSensorValue] = useState(0);
  const [simulate, setSimulate] = useState(false);

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

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={() => setSimulate(!simulate)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
      >
        {simulate ? "Stop Simulation" : "Simulate Heart Sensor"}
      </button>
      <p className="text-gray-700">Sensor Value: {sensorValue.toFixed(1)}</p>
      <div className="w-full h-full">
        <EmptyParticles sensorValue={sensorValue} />
        {/* Draggable chart widget (bottom-center by default) */}
        <FilteredDataChart
            rawValue={sensorValue}
            filteredValue={sensorValue}
            sampleRateHz={100}
        />
      </div>
    </div>
  );
};

export default HeartSimulator;
