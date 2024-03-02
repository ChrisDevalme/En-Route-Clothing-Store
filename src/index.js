import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from './Pages/App/App';
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><App/></StrictMode>)