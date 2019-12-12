import axios from 'axios';

export const CallPoki = () => dispatch => {
    dispatch({type: 'CALL_POKI'});
    axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
            dispatch({type: 'CALL_SUCCESS', payload: res.data.results});
        })
        .catch(error => dispatch({ type: 'CALL_FAIL', payload: error.response}))
}

