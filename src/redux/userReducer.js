//Redux of user is logged or not
export function authReducer(state = false, action){
    switch(action.type){
        case "SET_AUTH":
            return action.payload;
        default:
            return state;
    }
}

export const setAuth =(payload) =>{
    return {
        type: "SET_AUTH",
        payload
    }
}


//Redux of data of user if it's logged
export function userReducer(state = null, action){
    switch(action.type){
        case "SET_USER":
            return action.payload;
        default:
            return state;
    }
}

export const setUser =(payload) =>{
    return {
        type: "SET_USER",
        payload
    }
}