import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Serviceitems from "./components/Serviceitems";
import Carousel from "./components/Carousel";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setButtonText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Enable light");
      showAlert("success", "your dark mode has been enabled");
    } else {
      setMode("light");
      setButtonText("Enable dark");
      showAlert("success", "your light mode has been enabled");
    }
  };
  return (
         
      <div className={`bg-${mode} vh-100`}>
        <Navbar mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Carousel/>
        <Serviceitems />
      </div>
  
  );
}

export default App;
