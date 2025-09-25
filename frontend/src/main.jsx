import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StytchProvider } from "@stytch/react";
import { createStytchUIClient } from "@stytch/react/ui";

import "./index.css";
import App from "./App.jsx";

const stytch = createStytchUIClient(
  "public-token-test-e23805b8-6883-4629-8749-0dfd1e0bd3c5",
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StytchProvider stytch={stytch}>
      <App />
    </StytchProvider>
  </StrictMode>,
);
