
export const cart = (state=[], action) =>{
    switch(action.type){
        case "ADD_PRODUCT":
            return state = [...state, action.payload ]
        default:
            return state
    }
}