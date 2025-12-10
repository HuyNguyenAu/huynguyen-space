import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router";
import { ExperienceJetchargeFullStackEngineerPage } from "./pages/experience-jetcharge-full-stack-engineer";

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
            element={<ExperienceJetchargeFullStackEngineerPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
