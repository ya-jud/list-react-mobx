import React from "react";
import "./search-styles.sass";

const Search = (): JSX.Element => {
  return(
    <div className="box-search">
      <input type="search" id="search" placeholder="Поиск"/>
      <svg className="search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
        <g className="search-path" fill="none" stroke="#fff">
          <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
          <circle cx="8" cy="8" r="7"/>
        </g>
      </svg>
    </div>
  );
};

export default Search;