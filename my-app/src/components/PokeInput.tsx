import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import pokemonList from '../poke.json';

interface PokeProps{
  pokemon: string,
  val1: Number,
  val2: Number,
  index: Number,
  newPokemon: boolean
}

const PokeInput: React.FC<PokeProps> = ({pokemon,val1,val2,index,newPokemon}) => {
  const [toggleClear, setToggleClear] = useState(val1.valueOf() + val2.valueOf() >= 100);
  const [toggleSolo1, setToggleSolo1] = useState(val1.valueOf() >= 100);
  const [toggleSolo2, setToggleSolo2] = useState(val2.valueOf() >= 100);

  let unknown = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function handleDamagePercent(event: FormEvent<HTMLDivElement>): void {
    let tempVal1 = document.querySelector<HTMLInputElement>(`.pokemon-input-${index} #val1`);
    let tempVal2 = document.querySelector<HTMLInputElement>(`.pokemon-input-${index} #val2`);
    if(tempVal1 && tempVal2){
      if(parseFloat(tempVal1.value) + parseFloat(tempVal2.value) >= 100){
        setToggleClear(true);
      }
      else{
        setToggleClear(false);
      }
    }
    if(tempVal1){
      if(parseFloat(tempVal1.value) >= 100){
        setToggleSolo1(true);
      }
      else{
        setToggleSolo1(false);
      }
    }
    if(tempVal2){
      if(parseFloat(tempVal2.value) >= 100){
        setToggleSolo2(true);
      }
      else{
        setToggleSolo2(false);
      }
    }
  }

  return (
    <div>
      {Object.keys(pokemonList).includes(pokemon) ?
        <div className={`pokemon-input input-container pokemon-input-${index}`}>
          {pokemonList[pokemon as keyof typeof pokemonList] <= 721 ?
            <img src={require(`../icons/${pokemonList[pokemon as keyof typeof pokemonList].toString()}.png`)} />
            :
            <img src={require(`../icons/201-${unknown[Math.floor(Math.random()*unknown.length)]}.png`)} />
          }
          <div className="pokemon-name">{pokemon}</div>
          <div onChange={handleDamagePercent} className={`input-dmg-container${toggleClear ? " clear" : ""}${toggleSolo1 ? " solo" : ""}`}><input type="text" id="val1" defaultValue={val1.toString()}></input><span>%</span></div>
          <div onChange={handleDamagePercent} className={`input-dmg-container${toggleClear ? " clear" : ""}${toggleSolo2 ? " solo" : ""}`}><input type="text" id="val2" defaultValue={val2.toString()}></input><span>%</span></div>
        </div>
      :
      <div className={`pokemon-input input-container pokemon-input-${index}`}>
        <img src={require(`../icons/201-${unknown[Math.floor(Math.random()*unknown.length)]}.png`)} />
        {newPokemon ? <input type="text" className="pokemon-name-new" id="pokemon-name-new" defaultValue={pokemon}></input> : <div className="pokemon-name">{pokemon}</div>}
        <div onChange={handleDamagePercent} className={`input-dmg-container${toggleClear ? " clear" : ""}${toggleSolo1 ? " solo" : ""}`}><input type="text" id="val1" defaultValue={val1.toString()}></input><span>%</span></div>
        <div onChange={handleDamagePercent} className={`input-dmg-container${toggleClear ? " clear" : ""}${toggleSolo2 ? " solo" : ""}`}><input type="text" id="val2" defaultValue={val2.toString()}></input><span>%</span></div>
      </div>
    }
    </div>
  );
};

export default PokeInput;
