import React, { useState } from 'react'
import { useProductsActions } from '../Providers/ProductsProvider'

const FilterProducts = () => {
const dispatch = useProductsActions();
const [value, setValue] = useState("")

const changeHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value)
    dispatch({type:"filter", event:e})
}

  return (
    <div>
        <p>filter products based on:</p>
        <div>
            order by
            <select onChange={changeHandler} value={value}> 
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="XXXL">XXXL</option>
            </select>
        </div>
    </div>
  )
}

export default FilterProducts