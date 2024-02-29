//Import React Tools
import "./global.css";
import ReactDOM from "react-dom/client";

//Import our Main/First Component
import { App } from "./App";

//Target Root Componet
const rootDiv = document.getElementById("root");

//Create Virtual DOM by convert root div into React DOM
const reactRoot = ReactDOM.createRoot(rootDiv);

//render our Main/First Component

reactRoot.render(<App></App>);
