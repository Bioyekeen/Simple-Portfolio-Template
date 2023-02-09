import { createContext, useReducer, useContext } from "react";

export const store= createContext()

const reducer = (state, action) => {
    switch(action.type){
        case "loginPerson1":
                return {...state, person1: "Yusuf login successful"}

            case "loginPerson2":
                return {...state, person2: "kola login successful"}

            case "loginPerson3":
                return {...state, person2: "prince login successful"}

        default:
            return state

    }
}

const initialState = { person1: "yusuf", person2: "kola", person3: "prince"}

const StateProvider = ({children}) =>{    //children is th App.js wrap by stateprovidr
    return(
        <store.Provider value={useReducer(reducer, initialState)}>
            {children}
        </store.Provider>
    )
}

//export const useStore = () => useContext(store)

export default StateProvider