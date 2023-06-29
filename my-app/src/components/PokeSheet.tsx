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

  function createObject(keys: string[], values: any[]): any {
    return keys.reduce((obj: any, key: string, index: number) => {
      obj[key] = values[index];
      return obj;
    }, {});
  }

  const Push = () => {
    console.log("logging");
    // Build Array
    let result: any = {};
    document.querySelectorAll(".pokemon-input").forEach((el)=>{
      let nameEl=el.querySelector(".pokemon-name");
      let val1El=el.querySelector<HTMLInputElement>("#val1");
      let val2El=el.querySelector<HTMLInputElement>("#val2");
      if (nameEl && val1El && val2El){
        let name=nameEl.innerHTML;
        let val1=parseFloat(val1El.value);
        let val2=parseFloat(val2El.value);
        result[name] = [val1,val2]
      }
    })
    console.log(result);
    database.ref("pokemon").set(result).catch(alert);
  //   database.ref("pokemon").set({
  //   "Articuno":[64,0],
  //   "Zapdos":[55.20,0],
  //   "Moltres":[83.20,0],
  //   "Mewtwo":[59.50,0],
  //   "Entei":[64.40,0],
  //   "Raikou":[58.70,0],
  //   "Suicune ":[47.30,0],
  //   "Lugia":[37.70,0],
  //   "Ho-Oh":[60,0],
  //   "Regirock":[39.60,0],
  //   "Regice":[39,0],
  //   "Registeel":[41.90,0],
  //   "Latias":[47.80,0],
  //   "Mega Latias":[39.30,0],
  //   "Latios ":[55,0],
  //   "Mega Latios":[47.40,0],
  //   "Kyogre":[47.60,0],
  //   "Primal Kyogre ":[39.20,0],
  //   "Groudon":[44.80,0],
  //   "Primal Groudon":[40.10,0],
  //   "Rayquaza":[88.50,0],
  //   "Mega Rayquaza":[],
  //   "Deoxys (D)":[35.60,0],
  //   "Deoxys (N)":[89.70,0],
  //   "Deoxys (A)":[100,0],
  //   "Deoxys (S)":[51.40,0],
  //   "Uxie":[42.10,0],
  //   "Mesprit":[52.20,0],
  //   "Azelf":[71,0],
  //   "Dialga":[50.10,0],
  //   "Palkia":[50.50,0],
  //   "Heatran":[80.70,0],
  //   "Regigigas":[41.30,0],
  //   "Giratina (A)":[54.80,0],
  //   "Giratina (O)":[61.80,0],
  //   "Cresselia":[43.80,0],
  //   "Darkrai":[50.90,0],
  //   "Cobalion":[51.90,0],
  //   "Terrakion":[63.70,0],
  //   "Verizion ":[56.70,0],
  //   "Tornadus":[61,0],
  //   "Tornadus-T":[54.20,0],
  //   "Thundurus ":[62.70,0],
  //   "Thundurus-T":[59.40,0],
  //   "Reshiram":[52.30,0],
  //   "Zekrom":[56.30,0],
  //   "Landorus ":[80,0],
  //   "Landorus-T":[78.30,0],
  //   "Kyurem":[64,0],
  //   "Genesect":[74,0],
  //   "Xerneas":[53.60,0],
  //   "Yveltal":[56,0],
  //   "Hoopa":[45.60,0],
  //   "Nihilego":[83.70,0],
  //   "Buzzwole":[64.70,0],
  //   "Pheromosa ":[100,0],
  //   "Xurkitree":[73.20,0],
  //   "Celesteela":[57.60,0],
  //   "Kartana":[89,0],
  //   "Guzzlord":[100,0],
  //   "Zacian":[42.60,0],
  //   "Zamazenta":[48.90,0],
  //   "Regieleki":[85.30,0],
  //   "Regidrago":[99.30,0]
  // }).catch(alert);
}

  return (
    <div className="pokesheet">
      <div className="pokesheet-header input-container">
        <div className="raid-boss">Raid Boss</div>
        <div className="Johnny pokemaster">Johnny</div>
        <div className="Remy pokemaster">Remy</div>
      </div>
      {Object.keys(pokemon).map((poke)=>{
      return <PokeInput
      pokemon={poke}
      val1={pokemon[poke as keyof typeof pokemon][0]}
      val2={pokemon[poke as keyof typeof pokemon][1]}
      />
      })}
      <div className="button-container">
        <button className="submit" onClick={Push}>Save</button>
      </div>
    </div>
  );
};

export default PokeSheet;
