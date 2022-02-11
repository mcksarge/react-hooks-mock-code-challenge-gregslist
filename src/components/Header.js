import React from "react";
import Search from "./Search";

function Header({ searchedItem }) {

  function handleNewItem(newItem){
    searchedItem(newItem)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search newItem={handleNewItem}/>
    </header>
  );
}

export default Header;
