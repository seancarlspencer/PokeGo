import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import PokeInput from './PokeInput';

const PokeSheet = () => {
  const [pokemon, setPokemon] = useState([
    "Articuno",
    "Zapdos",
    "Moltres",
    "Mewtwo",
    "Entei",
    "Raikou",
    "Suicune ",
    "Lugia",
    "Ho-Oh",
    "Regirock",
    "Regice",
    "Registeel",
    "Latias",
    "Mega Latias",
    "Latios ",
    "Mega Latios",
    "Kyogre",
    "Primal Kyogre ",
    "Groudon",
    "Primal Groudon",
    "Rayquaza",
    "Mega Rayquaza",
    "Deoxys (D)",
    "Deoxys (N)",
    "Deoxys (A)",
    "Deoxys (S)",
    "Uxie",
    "Mesprit",
    "Azelf",
    "Dialga",
    "Palkia",
    "Heatran",
    "Regigigas",
    "Giratina (A)",
    "Giratina (O)",
    "Cresselia",
    "Darkrai",
    "Cobalion",
    "Terrakion",
    "Verizion ",
    "Tornadus",
    "Tornadus-T",
    "Thundurus ",
    "Thundurus-T",
    "Reshiram",
    "Zekrom",
    "Landorus ",
    "Landorus-T",
    "Kyurem",
    "Genesect",
    "Xerneas",
    "Yveltal",
    "Hoopa",
    "Nihilego",
    "Buzzwole",
    "Pheromosa ",
    "Xurkitree",
    "Celesteela",
    "Kartana",
    "Guzzlord",
    "Zacian",
    "Zamazenta",
    "Regieleki ",
    "Regidrago"
  ]);

  return (
    <div className="pokesheet">
      {pokemon.map((pokemonAsset)=>{
      return <PokeInput
      pokemon={pokemonAsset}
      />
      })}
    </div>
  );
};

export default PokeSheet;
