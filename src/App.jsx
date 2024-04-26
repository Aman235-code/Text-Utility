import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState("");
  const showAlert = (msg) => {
    setalert(msg);
  };
  return (
    <>
      <Navbar title="Text Utility" />
      <div className="mt-5">
        <TextForm heading="Enter the word........." showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
