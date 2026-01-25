import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";

import analytics from "../libs/firebase";

// 本番環境のみ計測
if (process.env.NODE_ENV === "production") {
  analytics.analytics();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />,
  </StrictMode>,
);
