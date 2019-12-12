

const initialState = {
    pokemon: [],
    error: (""),
    isFetching: false
}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {

        case 'CALL_POKI':
            return {
                ...state,
                error: (""),
                isFetching: true
            }

        case 'CALL_SUCCESS':
            return {
                ...state,
                pokemon: action.payload,
                error: (""),
                isFetching: false
            }

        case 'CALL_FAIL':
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }

        default:
            return  state
    }
}

export default reducer 