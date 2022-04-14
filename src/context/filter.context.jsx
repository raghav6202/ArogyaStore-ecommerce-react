import { createContext, useContext, useReducer } from "react";


const defaultValue = null;

const ContextOfFilter = createContext(defaultValue)

const FilterProvider = ( {children} ) =>
{



const filterReducerFn = (state , action) =>
{
    switch(action.type)
    {


    case "Low_to_High":
        return {...state , priceSort: "low_to_high"}


        case "High_to_Low":
            return {...state , priceSort: "high_to_low"}



case "rating_range":
    return { ...state , rating: action.payload}

 case "category":
    return{ ...state , category: state.category.includes(action.payload) ? state.category.filter( (item) => item !== action.payload) : [...state.category, action.payload], }


    case "clear":
        return{   category: [ ],
            priceSort: " " ,
            rating: "",
        }

        default:
            return{ category:[ ],
            priceSort:" ",
            rating: " ", }

    }

 

}


const preliminaryValues = 
{
    category: [ ],
    priceSort: " " ,
    rating:" 1",

}

const [state , dispatch] = useReducer(filterReducerFn, preliminaryValues)

    return (
        <ContextOfFilter.Provider value={{state,dispatch}}>
            {children}
        </ContextOfFilter.Provider>
    );


}


const useFilter = () => useContext(ContextOfFilter)


export {FilterProvider , useFilter};