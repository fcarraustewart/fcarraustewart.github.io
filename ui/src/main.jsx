import React from "react";
import ReactDOM from "react-dom/client";
import ParticleVessel from "./ParticleVessel";
import startWidget from "./ParticlesWidget.jsx";
import HeartSimulator from "./HeartSimulator.jsx";

ReactDOM.createRoot(document.getElementById("three-widget3")).render(
  <React.StrictMode>
    <ParticleVessel />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("three-widget2")).render(
//   <React.StrictMode>
//     <HeartSimulator />
//   </React.StrictMode>
// );

document.addEventListener("DOMContentLoaded", () => {
  console.log("Three widget starting…");
  startWidget();
});
