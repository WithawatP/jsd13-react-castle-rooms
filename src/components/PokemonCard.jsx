import { useState, useEffect } from "react";

export default function PokemonCard({ pokemonName, label, isGrey = false }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="flex flex-col items-center justify-center p-1">
      <div className="w-16 h-16 flex items-center justify-center">
        {loading ? (
          <span className="text-xs text-slate-400 animate-pulse">Loading...</span>
        ) : pokemon ? (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemonName}
            className={`w-16 h-16 object-contain ${isGrey ? "grayscale opacity-50" : ""}`}
          />
        ) : (
          <span className="text-xs text-slate-500">No Image</span>
        )}
      </div>
      <span className="text-xs font-semibold capitalize mt-1 text-slate-200">
        {label || pokemonName}
      </span>
    </div>
  );
}