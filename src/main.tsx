import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/pages/home";
import { HashRouter, Route, Routes } from "react-router";
import { JETChargeFullStackEngineerPage } from "@/pages/experience/jetcharge-full-stack-engineer";
import { EnergyLocalsITSpecialistPage } from "@/pages/experience/energy-locals-it-specialist";
import { EnergyLocalsGraduateITSpecialistPage } from "@/pages/experience/energy-locals-graduate-it-specialist";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element!");
}

createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/experience">
            <Route path="jetcharge">
              <Route
                path="full-stack-software-engineer"
                element={<JETChargeFullStackEngineerPage />}
              />
            </Route>
            <Route path="energy-locals">
              <Route
                path="it-specialist"
                element={<EnergyLocalsITSpecialistPage />}
              />
              <Route
                path="graduate-it-specialist"
                element={<EnergyLocalsGraduateITSpecialistPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
