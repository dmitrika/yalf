import { createRoot } from "react-dom/client";
import { App } from "./App";
import { API } from "./API";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App API={API} />);
