import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router";
import { ArticlePage } from "./pages/article";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element!");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="experience">
          <Route
            path="jetcharge/full-stack-software-engineer"
            element={
              <ArticlePage>
                <h3>Full Stack Software Engineer</h3>
                <h4>Company: JET Charge</h4>
                <h4>Duration: Oct 2021 - Present</h4>
                <h1></h1>
                <h4>CORE - EV Energy Management System</h4>
                <p>
                  On-premise and autonomous Electric Vehicle (EV) charging load
                  management system (CORE).
                </p>
                <p>
                  Developed Australia's first world leading UI for deploying and managing
                  on-premise EV charging load management systems.
                </p>
                <h4>Illuminate - EV Charging Management Platform</h4>
                <p>
                  Cloud-based platform for Electric Vehicle (EV) smart-charging
                  asset management (Illuminate).
                </p>
                <p>
                  Fixed various bugs and issues in the existing codebase,
                  ensuring the platform's stability and reliability.
                </p>
              </ArticlePage>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
