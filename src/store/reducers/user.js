import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData:{},
    allUsersData: [],
    valid: true
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case actionTypes.FETCH_USER_SUCCESS:
            state = {
                ...state,
                userData:{...action.user}
            };
            return state;

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state = {
                ...state,
                allUsersData:[...action.users]
            };
        return state;
        
        case actionTypes.FETCH_USER_FAILED:
            state = {
                ...state,
                valid: false
            };
            return state;
    
        default:
            return state;
    }
}

export default reducer;