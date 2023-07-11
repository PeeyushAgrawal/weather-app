import React from 'react';
import Search from './Search';
import Filter from './Filter';

const Header = ({searchCity, changeUnit, changeSpeed}) => {
  return (
    <header className = "App-header">
        <h1 className = "header-title" > Weather forecast </h1> 
        <Search searchCity={searchCity}></Search>
        <Filter changeUnit={changeUnit} changeSpeed={changeSpeed}></Filter>
      </header >
  );
}

export default Header;
