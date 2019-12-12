import React, {useState, useEffect} from "react"
import axios from "axios"
import '../styles/styles.scss'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState("")

    useEffect(() => {
        axios
            .get(props.url)
            .then(res =>{
                console.log(res)
                setPokemon(res.data)
            })
    }, [props.url]
    )


    return(
            <div className="pokeCard">
                <p>Name: {pokemon.name}</p>
                <div>
                    {pokemon.sprites && pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} alt="pokemon"></img>}
                    {pokemon.sprites && pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} alt="pokemon"></img>}
                </div> 
            </div>

    )

}

export default Pokemon