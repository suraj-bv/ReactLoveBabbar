import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <Card title='Card' name={name} setName={setName} />
      {name}
    </>
  );
}

export default App;
