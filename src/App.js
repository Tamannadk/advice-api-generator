import { useState } from "react";
import "./App.css";
import Advice from "./Components/Advice";

export default function App() {
  const [advice, setAdvice] = useState("");
  return (
    <>
      <Advice />
    </>
  );
}
