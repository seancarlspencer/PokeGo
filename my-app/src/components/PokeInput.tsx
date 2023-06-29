import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import pokemonList from '../poke.json';

interface PokeProps{
  pokemon: string,
  val1: Number,
  val2: Number
}

const PokeInput: React.FC<PokeProps> = ({pokemon,val1,val2}) => {

  let unknown = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div>
      {Object.keys(pokemonList).includes(pokemon) ?
        <div className="input-container">
          {pokemonList[pokemon as keyof typeof pokemonList] <= 721 ?
            <img src={require(`../icons/${pokemonList[pokemon as keyof typeof pokemonList].toString()}.png`)} />
            :
            <img src={require(`../icons/201-${unknown[Math.floor(Math.random()*unknown.length)]}.png`)} />
          }
          <div>{pokemon}</div>
          <div className={`input-1-container${val1 == 100 ? " solo" : ""}`}><input type="text" defaultValue={val1.toString()}></input><span>%</span></div>
          <div className={`input-1-container${val2 == 100 ? " solo" : ""}`}><input type="text" defaultValue={val2.toString()}></input><span>%</span></div>
        </div>
      :
      <div className="input-container">
        <img src={require(`../icons/201-${unknown[Math.floor(Math.random()*unknown.length)]}.png`)} />
        <div>{pokemon}</div>
        <div className={`input-1-container${val1 == 100 ? " solo" : ""}`}><input type="text" defaultValue={val1.toString()}></input><span>%</span></div>
        <div className={`input-1-container${val2 == 100 ? " solo" : ""}`}><input type="text" defaultValue={val2.toString()}></input><span>%</span></div>
      </div>
    }
    </div>
  );
};

export default PokeInput;
