import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import pokemonList from '../poke.json';

interface PokeProps{
  pokemon: string
}

const PokeInput: React.FC<PokeProps> = ({pokemon}) => {

  return (
    <div>
      {Object.keys(pokemonList).includes(pokemon) ?
        <div className="input-container">
          {pokemonList[pokemon as keyof typeof pokemonList] <= 721 ?
            <img src={require(`../icons/${pokemonList[pokemon as keyof typeof pokemonList].toString()}.png`)} />
            :
            <img/>
          }
          <div>{pokemon}</div>
          <input type="text"></input>
          <input type="text"></input>
        </div>
      :
      <div>no {pokemon}</div>}
    </div>
  );
};

export default PokeInput;
