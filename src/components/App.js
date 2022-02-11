import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [itemList, setItemList] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      setItemList(data)
    })
  }, [])

  function handleDelete(deletedItem) {
    const updatedItems = itemList.filter((item) => item.id !== deletedItem.id)
    setItemList(updatedItems)
  }

  function handleSearch(searchInput){
    setSearch(searchInput)
  }

  const itemSearch = itemList.filter((item) => {
    return item.description.toString().toLowerCase().includes( search.toString().toLowerCase() )
  })

  return (
    <div className="app">
      <Header searchedItem={handleSearch} />
      <ListingsContainer items={itemList} deleteItem={handleDelete} filteredList={itemSearch} />
    </div>
  );
}

export default App;
