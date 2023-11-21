

// Action.js

export const setSearchquery =(query)=>({
    type:'SET_SEARCH_QUERY',
    payload:query,
})

export const setAuth =(authentication)=>{
    return {
        type:'SET_AUTH',
        payload:authentication,
    }
}

//Reducer.js
const intialstate ={
    searchQuery:'',
    isLoggedIn:true,
}

export  const rootReducer=(state=intialstate,action)=>{
    switch(action.type){
        case 'SET_SEARCH_QUERY':
            return {...state,searchQuery:action.payload,};
        case 'SET_AUTH':
            return{ ...state,isLoggedIn:action.payload}
    default:
        return state;
}
}