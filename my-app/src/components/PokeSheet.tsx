import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import PokeInput from './PokeInput';
import database from '../firebase';

const PokeSheet = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const pokemonDisplay = database.ref("pokemon").get().then((data)=>{
      console.log(data.val());
      setPokemon(data.val());
    })
  }, []);

  const Push = () => {
    console.log("logging");
    // Build Array

    database.ref("pokemon").set({
    }).catch(alert);
}

  return (
    <div className="pokesheet">
      <div className="pokesheet-header input-container">
        <div className="raid-boss">Raid Boss</div>
        <div className="Johnny">Johnny</div>
        <div className="Remy">Remy</div>
      </div>
      {Object.keys(pokemon).map((poke)=>{
      return <PokeInput
      pokemon={poke}
      val1={pokemon[poke as keyof typeof pokemon][0]}
      val2={pokemon[poke as keyof typeof pokemon][1]}
      />
      })}
      {/* <button className="submit" onClick={Push}>Save</button> */}
    </div>
  );
};

export default PokeSheet;
