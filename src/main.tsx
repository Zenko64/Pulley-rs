import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./page/App";
import { ThemeProvider } from './providers/ThemeManager';
import "@/assets/css/index.css"
import { Toaster } from "./components/ui/toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
);
