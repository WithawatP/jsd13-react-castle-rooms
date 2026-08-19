import Castle from "./components/01_Castle";
import { useContext } from "react";
import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {
  const { question, handleQuestion } = useContext(MessageContext);

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
      <Castle />
    </div>
  );
}
