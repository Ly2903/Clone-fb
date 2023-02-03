import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ActiveNavContext } from "./Context/ActiveNavContext";
import RoutesConfig from "./routes/RoutesConfig";

function App() {
  const [activeTabNav, setActiveTabNav] = useState("home");
  return (
    <ActiveNavContext.Provider value={{ activeTabNav, setActiveTabNav }}>
      <div className="App relative">
        <RoutesConfig />
      </div>
      <ToastContainer />
    </ActiveNavContext.Provider>
  );
}

export default App;
