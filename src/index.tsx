import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);