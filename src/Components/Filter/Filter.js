import React from "react";
import Cards from "../Card/Cards2";
import SearchBar from "../SearchBar/SearchBar";

import "../Filter/filter.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      value: "",
    };
  }

  componentDidMount() {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fruits: data });
      })
      .then((sort) => {
        sort = this.state.fruits;
        sort = sort.sort((a, b) => (a.name > b.name) ? 1 : -1)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  inputValue = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  sorting = (e) => {
    const condition = e.target.value;
    const fruits = this.state.fruits;

    const result = fruits.sort((a,b)=>{
      if(condition === 'proteins'){
        return a.nutritions.protein - b.nutritions.protein;
      }
      if(condition === 'fat'){
        return a.nutritions.fat - b.nutritions.fat;
      }
      if(condition === 'calories'){
        return a.nutritions.calories - b.nutritions.calories;
      }
      if(condition === 'sugar'){
        return a.nutritions.sugar - b.nutritions.sugar;
      } else {
          return a.name > b.name ? 1 : - 1
        }
      }
    )
    this.setState({ fruits: result });
  }

  render() {
    return (
      <>
        <div className="filter">
          <label htmlFor="nutritient-select">Sort in ascending order:</label>
          <select name="nutritient" onChange={this.sorting}>
            <option value="alphabetical">Alphabetical</option>
            <option value="proteins">Proteins</option>
            <option value="fat">Fat</option>
            <option value="calories">Calories</option>
            <option value="sugar">Sugar</option>
          </select>
        </div>

        <SearchBar
          className="search__input"
          type="text"
          placeholder="Search a fruit"
          name="searchbar"
          onChange={this.inputValue}
          // value={this.state.value}
        />

        <Cards fruits={this.state.fruits} value={this.state.value} />
      </>
    );
  }
}
export default Filter;
