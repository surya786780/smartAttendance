import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
