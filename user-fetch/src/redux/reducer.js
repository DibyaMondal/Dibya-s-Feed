import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionTypes.js"


const initialState = {
    loading:true,
    data:[],
    error:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case FETCH_USER_REQUEST:
        return {
            loading:true,
            ...state
        }
    case FETCH_USER_SUCCESS:
        return {
            loading:false,
            data:action.payload,
            error:""
        }
    case FETCH_USER_FAILURE:
        return {
            loading:false,
            data:[],
            error:action.payload
        }
    default:
        return state
    }
}
export default reducer