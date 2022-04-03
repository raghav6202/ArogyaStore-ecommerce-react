
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
          onClick={() => dispatch( {type:"Low_to_High", payload: null,})}
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
          onClick={() => dispatch({type:"High_to_Low" , payload: null,})}
        />
        High To Low
      </label>
    </div>
  </div>



  <div className="filter-component">
    <div className="filter-title">CATEGORIES</div>

    <div className="filter-list">
      <label for="cbox-1"
        ><input id="cat-1" name="checkbox" type="checkbox" />ALL</label
      >
      <label for="cbox-2"
        ><input
          id="cat-2"
          name="checkbox"
          type="checkbox"
        />Medicenes</label
      ><label for="cbox-3"
        ><input
          id="cat-3"
          name="checkbox"
          type="checkbox"
        />Med-Tech</label
      ><label for="cbox-4"
        ><input
          id="cat-4"
          name="checkbox"
          type="checkbox"
        />Self-Testing Kits</label
      ><label for="cbox-5"
        ><input
          id="cat-5"
          name="checkbox"
          type="checkbox"
        />Rehab-Kits</label
      >
    </div>
  </div>

  <div className="filter-component">
    <div className="filter-title">AVAILABILITY</div>

    <div className="filter-list">
      <label for="avail-box">
        <input type="checkbox" name="stock" id="avail-box" />
        Include Out Of Stock
      </label>
    </div>
  </div>


  <div className="filter-component">
    <div className="filter-title">Ratings</div>

    <div className="filter-list">
      <label for="rating-box">
        0<div className="glowing-star"><i className="fi-xnsuxl-star-solid"></i></div>
        <input type="range" name="rating" id="rating-box" />
        5<div className="glowing-star"><i className="fi-xnsuxl-star-solid"></i></div>
      </label>
    </div>
  </div>


  <div className="filter-component">
    <div className="filter-title"></div>

    <div className="filter-list">
      <a href="http://" className="nav-links"> <strong>Clear Filter</strong> </a>


    </div>
  </div>

</div>

</aside>


  )

}

export {SideBar};