import { DEC,INC } from "../constant"
const initialState = {
    data:0
}

const rootReducer = (state = initialState,action)=>{
    console.log(33434,action)

    switch(action.type)
     {
    case INC:
         return{
             ...state,
            data : state.data + 1
            
        }
    case DEC:
        return{
            ...state,
            data : state.data - 1
            
        }
       default:
           return state
    }
    
}
export default rootReducer;