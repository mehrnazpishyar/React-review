import React, { useState } from "react";
import SortComponent from "../../common/Select/Select";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./filter.module.css";
import SearchBar from "../../common/Search/Search";

const filterOptions = [
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
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    console.log(selectedOption);
    // dispatch({type:"filter", selectedOption:selectedOption})
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    // dispatch({type:"sort", selectedOption:selectedOption})
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <p>filter products based on:</p>

        <SortComponent
          title="filter by price"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />

        <SortComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default FilterProducts;
