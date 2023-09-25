import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";

import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const switchh = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#111a28";
      showalert("Dark Mode Enables", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enable", "success");
    }
  };

  return (
    <>
      <Navbar title="Text-Conversion" mode={mode} switchh={switchh}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route exact
          path="/"
          element={
            <div className="container">
              <TextForm
                heading="Enter Text to Conversion"
                mode={mode}
                showalert={showalert}
              ></TextForm>
            </div>
          }
        />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
