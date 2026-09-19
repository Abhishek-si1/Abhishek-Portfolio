import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Style order matters: base tokens -> app styles -> Bootstrap.
// Bootstrap intentionally stays LAST: that is the order the site had before the
// refactor (the old Navbar imported it after App.css), so visuals are unchanged.
// Only the Bootstrap CSS is needed (grid/utilities) - its JS bundle was never used.
import "./styles/index.css";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
