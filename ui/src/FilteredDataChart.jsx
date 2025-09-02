// src/FilteredDataChart.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

/**
 * Robust, corrected FilteredDataChart:
 * - black main trace (no hover tooltip)
 * - gain & window controls
 * - peak detection (marks maxima with dot + small tag number)
 * - draggable widget
 *
 * Props:
 *   rawValue, filteredValue (numbers or null)
 *   sampleRateHz (default 100)
 */
export default function FilteredDataChart({
  rawValue,
  filteredValue,
  sampleRateHz = 100,
}) {
  // UI
  const [mode, setMode] = useState("filtered");
  const [gain, setGain] = useState(1.0);
  const [winSec, setWinSec] = useState(1);

  // Data buffer
  const [data, setData] = useState([]); // {t, raw, filtered}
  const maxPointsRef = useRef(Math.max(10, Math.floor(sampleRateHz * winSec)));
  const [sampleIndex, setSampleIndex] = useState(0);

  useEffect(() => {
    if (rawValue == null) return;
    // setSampleIndex(i => i + 1);
    // setData(prev => {
    //   const next = [...prev, { i: sampleIndex, raw: rawValue, filtered: filteredValue }];
    //   if (next.length > maxPointsRef.current) next.shift();
    //   return next;
    // });
    setSampleIndex((i) => i + 1);
    setData((prev) => {
        const next = [
        ...prev,
        {
            i: sampleIndex,
            t: sampleIndex * (1000 / sampleRateHz),
            raw: rawValue,
            filtered: filteredValue,
        },
        ];
        if (next.length > maxPointsRef.current) next.shift();
        return next;
    });
    }, [rawValue, filteredValue, sampleRateHz]);

  // Trim when window changes
  useEffect(() => {
    setData((prev) =>
      prev.slice(-Math.max(10, Math.floor(sampleRateHz * winSec)))
    );
    maxPointsRef.current = Math.max(10, Math.floor(sampleRateHz * winSec));
  }, [winSec, sampleRateHz]);

  // Build chartData and detect peaks each render
  const chartData = data.map((d) => ({
    t: d.t,
    y: (d[mode] ?? 0) * gain,
    peak: null,
    peakLabel: "",
  }));

  // Peak detection function: returns indices of peaks
  function detectPeakIndices(yArray, tArray) {
    const idxs = [];
    const n = yArray.length;
    if (n < 3) return idxs;

    // compute range & adaptive prominence
    const minY = Math.min(...yArray);
    const maxY = Math.max(...yArray);
    const range = Math.max(1e-6, maxY - minY);
    // tuneable: require at least 12% of the window range, but min 0.01 absolute
    const minProm = Math.max(0.01, range * 0.12);
    const refractoryMs = 250; // don't allow peaks faster than this

    let lastPeakTime = -Infinity;

    for (let i = 1; i < n - 1; i++) {
      const v = yArray[i];
      if (!Number.isFinite(v)) continue;
      if (v <= yArray[i - 1]) continue;
      if (v < yArray[i + 1]) continue;

      // local minima to left / right (small neighbourhood)
      const leftIdx = Math.max(0, i - 6);
      const rightIdx = Math.min(n - 1, i + 6);
      const leftMin = Math.min(...yArray.slice(leftIdx, i + 1));
      const rightMin = Math.min(...yArray.slice(i, rightIdx + 1));
      const localProm = v - Math.max(leftMin, rightMin);

      const t = tArray[i] ?? Date.now();

      if (localProm >= minProm && t - lastPeakTime > refractoryMs) {
        idxs.push(i);
        lastPeakTime = t;
      }
    }
    return idxs;
  }

  // compute peaks and mark into chartData
  if (chartData.length > 2) {
    const yArr = chartData.map((d) => -d.y);
    const tArr = chartData.map((d) => d.t);
    const peakIdxs = detectPeakIndices(yArr, tArr);

    // label peaks sequentially (1..N) in-window
    for (let i = 0; i < peakIdxs.length; i++) {
      const idx = peakIdxs[i];
      if (chartData[idx]) {
        chartData[idx].peak = chartData[idx].y; // numeric
        chartData[idx].peakLabel = String(i + 1);
      }
    }
  }

  // Draggable widget logic (fixed positioning)
  const boxRef = useRef(null);
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const dragRef = useRef({ active: false, dx: 0, dy: 0 });

  useLayoutEffect(() => {
    const w = 420;
    const h = 200;
    const left = Math.max(12, (window.innerWidth - w) / 2);
    const top = Math.max(12, window.innerHeight - h - 24);
    setPos({ left, top });
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      setPos((p) => ({ left: e.clientX - dragRef.current.dx, top: e.clientY - dragRef.current.dy }));
    };
    const onUp = () => (dragRef.current.active = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const startDrag = (e) => {
    const rect = boxRef.current?.getBoundingClientRect();
    dragRef.current.dx = e.clientX - (rect?.left ?? 0);
    dragRef.current.dy = e.clientY - (rect?.top ?? 0);
    dragRef.current.active = true;
  };

  // Render
  return (
    <div
      ref={boxRef}
      style={{
        position: "fixed",
        left: pos.left,
        top: pos.top,
        width: 420,
        height: 200,
        padding: "8px",
        borderRadius: 12,
        background: "rgba(240,238,230,0.78)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
        zIndex: 20,
        userSelect: "none",
      }}
    >
      {/* Top bar (drag handle + controls) */}
      <div
        onMouseDown={startDrag}
        style={{
          position: "absolute",
          right: 4,
          bottom: 4,
          width: 16,
          height: 16,
          background: "#555",
          borderRadius: 3,
          cursor: "grab",
        }}
        title="Drag to move"
      >
        <div style={{ width: 10, height: 10, borderRadius: 3, background: "#222", opacity: 0.6 }} />
        <strong style={{ fontSize: 13 }}>Signal</strong>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12 }}>View</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={{ fontSize: 12, padding: "3px 6px", borderRadius: 6 }}
            >
              <option value="filtered">Filtered</option>
              <option value="raw">Raw</option>
            </select>
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12 }}>Gain</span>
            <input
              type="range"
              min="0.5"
              max="6"
              step="0.1"
              value={gain}
              onChange={(e) => setGain(parseFloat(e.target.value))}
              style={{ width: 90 }}
            />
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 12 }}>Window</span>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={winSec}
              onChange={(e) => setWinSec(parseInt(e.target.value, 10))}
              style={{ width: 90 }}
            />
            <span style={{ fontSize: 12 }}>{winSec}s</span>
          </label>
        </div>
      </div>

      {/* Chart area */}
      <div style={{ width: "100%", height: "calc(100% - 36px)" }}>
        {chartData.length > 1 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 6, right: 6, left: 0, bottom: 6 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis
                dataKey="t"
                tickFormatter={(t) => {
                  if (!chartData.length) return "";
                  const base = chartData[0].t ?? t;
                  return ((t - base) / 1000).toFixed(1) + "s";
                }}
                tick={{ fontSize: 10 }}
                minTickGap={20}
              />
              {/* <XAxis dataKey="i" tickFormatter={(i) => (i / sampleRateHz).toFixed(1) + "s"} /> */}
              <YAxis tick={{ fontSize: 10 }} domain={["auto", "auto"]} />

              {/* main black trace */}
              <Line
                type="monotone"
                dataKey="y"
                stroke="#200"
                dot={false}
                isAnimationActive={false}
                strokeWidth={4}
                connectNulls={false}
              />

              {/* peaks: show isolated dots only (strokeWidth 0 so line not visible) and label */}
              <Line
                type="monotone"
                dataKey="peak"
                stroke="#100"
                dot={{ r: 3 }}
                strokeWidth={0}
                isAnimationActive={false}
                connectNulls={false}
              >
                <LabelList
                  dataKey="peakLabel"
                  position="top"
                  style={{ fontSize: 10, fill: "#000", fontWeight: 600 }}
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ height: "100%", display: "grid", placeItems: "center", fontSize: 12 }}>Waiting for data…</div>
        )}
      </div>
    </div>
  );
}
