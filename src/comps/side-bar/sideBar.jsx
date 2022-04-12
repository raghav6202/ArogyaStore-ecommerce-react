
import "./sideBar.css";

import {useFilter } from "./../../context/filter.context.jsx"

function SideBar () 
{

const {state , dispatch} = useFilter()

  return(
   

<aside className="side-bar" >



<div className="filters">
  <div className="filter-component">
    <div className="filter-title">PRICE RANGE</div>

    <div className="filter-list">
      <label for="radio-1">
        <input
          type="radio"
          name="price_sort"
          className="radio"
          id="radio-1"
          checked={state.priceSort === "low_to_high"}
          value={state.priceSort}
          onChange={() => dispatch( {type:"Low_to_High", payload: null,})}
        />
        Low To High
      </label>

      <label for="radio-2">
        <input
          type="radio"
          name="price_sort"
          className="radio"
          id="radio-2"
          checked={state.priceSort === "high_to_low" }
          value={state.priceSort}
          onChange={() => dispatch({type:"High_to_Low" , payload: null,})}
        />
        High To Low
      </label>
    </div>
  </div>



  <div className="filter-component">
    <div className="filter-title">CATEGORIES</div>

    <div className="filter-list">
     
      <label for="cbox-2"
        ><input
          id="cat-2"
          name="categories"
          type="checkbox"
          checked={state.category.includes("medicines")}  
          onChange={() => dispatch({type:"category" , payload: "medicines",}) }
        />Medicines</label
      ><label for="cbox-3"
        ><input
          id="cat-3"
          name="categories"
          type="checkbox"
          checked={state.category.includes("medtech")}
          onChange={() => dispatch({type:"category" , payload: "medtech",}) }
        />Med-Tech</label
      ><label for="cbox-4"
        ><input
          id="cat-4"
          name="categories"
          type="checkbox"


        />Self-Testing Kits</label
      ><label for="cbox-5"
        ><input
          id="cat-5"
          name="categories"
          type="checkbox"
          checked={state.category.includes("rehab")}
          onChange={() => dispatch({ type: "category", payload: "rehab", }) }
        />Rehab</label
      >
    </div>
  </div>




  <div className="filter-component">
    <div className="filter-title">Ratings</div>

    <div className="filter-list">
      <label  for="rating-box">
        0 <div className="glowing-star">⭐ </div>
        <input  type="range" name="rating" id="rating-box" min="1" max="5" 
        step="1" value={state.rating} onChange={ (e) => dispatch({ type: "rating_range" , payload: e.target.value}) } />
        5 <div className="glowing-star">⭐ </div>
      </label>
    </div>
  </div>


  <div className="filter-component">
    <div className="filter-title"></div>

    <div className="filter-list">

      <button className="btn-cart btn" onClick={ () => dispatch({ type:"clear"})}>Clear Filter</button>

    </div>
  </div>

</div>

</aside>


 )

}

export {SideBar};


