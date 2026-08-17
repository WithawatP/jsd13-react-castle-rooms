import { useState } from "react";
import Castle from "./components/01_Castle";
import confetti from "canvas-confetti";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [hasReinforcements, setHasReinforcements] = useState(false);
  const [isBuildingPod, setIsBuildingPod] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);
  const [isPodReady, setIsPodReady] = useState(false);
  const [isPodCalled, setIsPodCalled] = useState(false);
  const [isSeakingInPod, setIsSeakingInPod] = useState(false);
  const [isEscaped, setIsEscaped] = useState(false);

  const isHelpRequested = answer.trim().toLowerCase() === "help";

  const handleBuildPod = () => {
    setIsBuildingPod(true);
    setBuildProgress(0);

    const duration = 4000;
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          setIsBuildingPod(false);
          setIsPodReady(true);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);
  };

  const handleTransportOutside = () => {
    setIsEscaped(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-slate-800 text-slate-100 flex flex-col items-center py-6">
      <div className="w-full max-w-2xl text-center mb-4">
        <h1 className="text-3xl font-bold text-yellow-400 mb-1">
          Outside the Castle
        </h1>

        <p className="text-sm text-slate-400">
          {isPodReady && !isEscaped
            ? "All aboard the Escape Pod!"
            : "Pokemon outside:"}
        </p>

        <div className="flex justify-center gap-4 my-3">
          {isPodReady && !isEscaped ? (
            <div className="border border-yellow-500 bg-slate-800 rounded-xl p-3 flex justify-center gap-4">
              <PokemonCard pokemonName="pikachu" />
              <PokemonCard pokemonName="bulbasaur" />
              <PokemonCard pokemonName="charmander" />
              <PokemonCard pokemonName="squirtle" />
            </div>
          ) : (
            <>
              <PokemonCard pokemonName="pikachu" />
              {hasReinforcements && (
                <>
                  <PokemonCard pokemonName="bulbasaur" />
                  <PokemonCard pokemonName="charmander" />
                  <PokemonCard pokemonName="squirtle" />
                </>
              )}
              {isEscaped && (
                <PokemonCard pokemonName="seaking" label="seaking ✓" />
              )}
            </>
          )}
        </div>
        {isEscaped && (
          <h2 className="text-2xl font-bold text-yellow-400 my-3 animate-bounce">
            Seaking has been rescued!
          </h2>
        )}

        {isHelpRequested && !hasReinforcements && (
          <div className="my-2">
            <p className="text-yellow-400 text-xs font-semibold mb-2">
              Help signal received from inside!
            </p>
            <button
              onClick={() => setHasReinforcements(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-lg transition"
            >
              Call for Reinforcements!
            </button>
          </div>
        )}

        {hasReinforcements && !isPodReady && !isBuildingPod && (
          <button
            onClick={handleBuildPod}
            className="bg-green-500 hover:bg-green-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg my-2 transition"
          >
            Build Escape Pod!
          </button>
        )}

        {isBuildingPod && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-slate-800 border border-yellow-500/80 p-6 rounded-xl w-80 text-center shadow-xl">
              <h3 className="text-yellow-400 font-bold mb-4">
                Building Escape Pod...
              </h3>
              <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-yellow-400 h-full transition-all duration-75"
                  style={{ width: `${buildProgress}%` }}
                />
              </div>
              <p className="font-bold text-xl text-white">
                {Math.round(buildProgress)}%
              </p>
            </div>
          </div>
        )}

        <div className="mt-3">
          <p className="text-xs text-slate-400 mb-1">
            Message to the Secret Room:{" "}
            <span className="text-yellow-400">{question || "Waiting..."}</span>
          </p>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-64 rounded bg-white text-black px-3 py-1 text-center text-sm"
            placeholder="Type your message here..1."
          />
          <p className="text-xs text-slate-400 mt-1">
            Reply from the Secret Room:{" "}
            <span className="text-green-400">
              {answer || "Waiting for a reply..."}
            </span>
          </p>
        </div>
      </div>

      <Castle
        question={question}
        answer={answer}
        handleAnswer={(e) => setAnswer(e.target.value)}
        isPodReady={isPodReady}
        isPodCalled={isPodCalled}
        setIsPodCalled={setIsPodCalled}
        isSeakingInPod={isSeakingInPod}
        setIsSeakingInPod={setIsSeakingInPod}
        isEscaped={isEscaped}
        handleTransportOutside={handleTransportOutside}
      />
    </div>
  );
}
