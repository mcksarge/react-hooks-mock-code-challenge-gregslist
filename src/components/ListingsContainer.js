import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ deleteItem, filteredList }) {

  const itemCards = filteredList.map((item) => {
    return (
      <ListingCard 
      key={item.id} 
      description={item.description}  
      image={item.image}
      location={item.location}
      onDelete={handleDelete}
      item={item}
      />
    )
  })

  function handleDelete(deletedItem){
    deleteItem(deletedItem)
  }

  return (
    <main>
      <ul className="cards">
        {itemCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
