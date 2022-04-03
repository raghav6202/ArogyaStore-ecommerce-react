import { createContext, useContext, useReducer } from "react/cjs/react.production.min";


const defaultValue = null;

const ContextOfFilter = createContext(defaultValue)

const FilterProvider = ( {children} ) =>
{



const filterReducerFn = (state , action) =>
{
    switch(action.type)
    {
case "category":
    return{ ...state , category: state.category.include(action.payload) ? state.category.filter((item) => item !== action.payload) : [ ...state.category, action.payload] }
break;

    case "Low_to_High":
        return {...state , priceSort: "low_to_high"}


        case "High_to_Low":
            return {...state , priceSort: "high_to_low"}

case "rating_range":
    return { ...state , rating: action.payload}

 

    case "clear":
        return{ ...state ,category: "",
        priceSort: [],
        rating: 1,}

    }
}


const preliminaryValues = 
{
    category: "",
    priceSort: [],
    rating: 1,

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