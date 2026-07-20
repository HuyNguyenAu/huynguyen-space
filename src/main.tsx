import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/pages/home";
import { HashRouter, Route, Routes } from "react-router";
import { JETChargeFullStackEngineerPage } from "@/pages/experience/jetcharge-full-stack-engineer";
import { EnergyLocalsITSpecialistPage } from "@/pages/experience/energy-locals-it-specialist";
import { EnergyLocalsGraduateITSpecialistPage } from "@/pages/experience/energy-locals-graduate-it-specialist";
import { ZeroTouchConfigurationPage } from "@/pages/projects/zero-touch-configuration";
import { EdgeLoadManagementPage } from "@/pages/projects/edge-load-management";
import { RootPage } from "@/pages/root";
import { BillingForApartments } from "@/pages/projects/billing-for-apartments";
import { Resume } from "@/pages/resume";
import { InterviewIndexPage } from "@/pages/interview/index";
import { JETChargeWorkReferencePage } from "@/pages/interview/jetcharge";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element!");
}

createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="/projects">
            <Route
              path="zero-touch-configuration"
              element={<ZeroTouchConfigurationPage />}
            />
            <Route
              path="edge-load-management"
              element={<EdgeLoadManagementPage />}
            />
            <Route
              path="billing-for-apartments"
              element={<BillingForApartments />}
            />
          </Route>
          <Route path="/interview">
            <Route index element={<InterviewIndexPage />} />
            <Route path="jetcharge" element={<JETChargeWorkReferencePage />} />
          </Route>
          <Route path="/experience">
            <Route
              path="zero-touch-configuration"
              element={<ZeroTouchConfigurationPage />}
            />
            <Route
              path="edge-load-management"
              element={<EdgeLoadManagementPage />}
            />
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
  </StrictMode>,
);
