import React from "react";
import ReactDOM from "react-dom/client";
import ParticleVessel from "./ParticleVessel";
import startWidget from "./ParticlesWidget.jsx";

ReactDOM.createRoot(document.getElementById("three-root")).render(
  <React.StrictMode>
    <ParticleVessel />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Three widget starting…");
  startWidget();
});
