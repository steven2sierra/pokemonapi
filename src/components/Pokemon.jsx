import React, { useState, useEffect } from 'react';
// Fetch button
import Fetch from './Fetch';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]); // sets default to empty array
    // useEffect
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(response => setPokemon([]))
    }, [] );
    // onClickHandler
    const onClickHandler = e => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }
    // style <div>
    const styleDIV = {
        marginTop: "60px"
    }
    // style list
    const styleList = {
        margin: "0 auto",
        width: "100px",
        marginTop: "80px",
        display: "block"
    }
    return(
        <div style={styleDIV}>
            <h3>Fetch Pokemon using this button</h3>
                <Fetch onClick={onClickHandler}>Fetch Pokemon</Fetch>
            {/* intialize map and add return */}
            {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (
                    <div>
                        <ul style={styleList}>
                <li key={index}>{poke.name}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );

}


export default Pokemon;