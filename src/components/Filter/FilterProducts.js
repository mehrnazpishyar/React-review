import React, { useState } from "react";
import Select from "react-select";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./filter.module.css";

const options = [
  { value: "", label: "ALL" },
  { value: "XS", label: "XS" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "XXXL", label: "XXXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const FilterProducts = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    // dispatch({type:"filter", selectedOption:selectedOption})
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption:sort });
    setValue(selectedOption);
  };


  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    // dispatch({type:"filter", selectedOption:selectedOption})
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <div className={styles.filter}>
      <p>filter products based on:</p>
      <div className={styles.selectContainer}>
        <span> order by</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />
      </div>
      <div className={styles.selectContainer}>
        <span> sort by</span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={styles.select}
        />
      </div>
    </div>
  );
};

export default FilterProducts;
