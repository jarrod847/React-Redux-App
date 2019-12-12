import React, {useEffect} from "react"
import {connect} from "react-redux"

import Pokemon from "./Pokemon"
import {CallPoki} from "../actions/callPoki"

const PokemonList = (props) => {
    useEffect(() => {
        props.CallPoki()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.CallPoki])

    console.log(props.pokemon)

    return (
        <div>
            {props.pokemon.map(pokemon => {
                return <Pokemon pokemon={pokemon} url={pokemon.url}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {CallPoki})(PokemonList)