import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {

  const [question, setQuestion] = useState("hello-world");
  const [answer, setAnswer] = useState("hello");

  return (
    <div className="min-h-screen flex justify-center bg-blue-950">
      <Castle />
      {question}
      {answer}
    </div>
  );
}
