import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value)
  }

    const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-950 gap-5">
      <div className="flex justify-center">
        <textarea 
        value={question} 
        onChange={handleQuestion} 
        className="w-55 rounded bg-white text-black px-3 py-1 text-center items-center mt-5" 
        placeholder="Type Your masseage here..." 
        />
      </div>
      <Castle question = {question} answer = {answer} handleAnswer = {handleAnswer}/>
    </div>
  );
}
