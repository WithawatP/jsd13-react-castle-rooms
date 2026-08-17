import React from "react";
import PokemonCard from "./PokemonCard";

const SecretRoom = ({
  question,
  answer,
  handleAnswer,
  isPodReady,
  isPodCalled,
  setIsPodCalled,
  isSeakingInPod,
  setIsSeakingInPod,
  isEscaped,
  handleTransportOutside,
}) => {
  return (
    <div className="w-full h-full bg-slate-800 p-6 rounded-lg text-center relative">
      <h2 className="text-xl font-bold mb-3 text-white">SecretRoom</h2>

      {isEscaped ? (
        <div className="my-6">
          <h3 className="text-green-400 font-bold text-xl mb-1">
            The prisoner has escaped!
          </h3>
          <p className="text-slate-400 text-sm">The Secret Room is empty.</p>
        </div>
      ) : (
        <div className="border border-red-500/80 bg-slate-900 rounded-xl p-4 my-3 max-w-xs mx-auto">
          <p className="text-red-400 text-sm font-semibold mb-1">
            {isSeakingInPod
              ? "Entering the pod..."
              : "A prisoner is trapped here!"}
          </p>
          <PokemonCard pokemonName="seaking" isGrey={isSeakingInPod} />
        </div>
      )}

      {isPodReady && !isPodCalled && !isEscaped && (
        <div className="my-3">
          <p className="text-purple-300 text-xs mb-2">
            You sense something waiting just outside...
          </p>
          <button
            onClick={() => setIsPodCalled(true)}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-lg transition"
          >
            Call the Pod!
          </button>
        </div>
      )}

      {isPodCalled && !isEscaped && (
        <div className="border border-yellow-500/80 bg-slate-900 rounded-xl p-4 my-3 max-w-sm mx-auto">
          <p className="text-yellow-400 font-bold text-sm mb-2">
            The Escape Pod is here!
          </p>

          <div className="flex justify-center gap-2 mb-3">
            <PokemonCard pokemonName="pikachu" />
            <PokemonCard pokemonName="bulbasaur" />
            <PokemonCard pokemonName="charmander" />
            <PokemonCard pokemonName="squirtle" />
            {isSeakingInPod && (
              <PokemonCard pokemonName="seaking" label="Seaking ✓" />
            )}
          </div>

          {!isSeakingInPod ? (
            <button
              onClick={() => setIsSeakingInPod(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition"
            >
              Enter the Pod!
            </button>
          ) : (
            <button
              onClick={handleTransportOutside}
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
            >
              Transport Outside!
            </button>
          )}
        </div>
      )}

      <div className="mt-4">
        <p className="text-xs text-slate-400 mb-1">
          Message from outside:{" "}
          <span className="text-yellow-400">{question || "Waiting..."}</span>
        </p>
        <textarea
          value={answer}
          onChange={handleAnswer}
          className="w-56 rounded bg-white text-black px-3 py-1 text-center text-sm"
          placeholder="Type your message here..."
        />
        <p className="text-xs text-slate-400 mt-1">
          Your reply: <span className="text-yellow-400">{answer}</span>
        </p>
      </div>
    </div>
  );
};

export default SecretRoom;
