import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PlantProvider from "./components/PlantProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantProvider>
    <App />
    </PlantProvider>
  </StrictMode>
);
