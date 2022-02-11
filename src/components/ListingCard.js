import React, { useState } from "react";

function ListingCard({ description, image, location, onDelete, item }) {

  const [liked, setLiked] = useState(false)
  let likeButton = ""

  //Handles favorite Button
  function handleClick(e) {
    if (liked === false){
      setLiked(true)
    } else {
      setLiked(false)
    }
  }

  if (liked === false) {
    likeButton = <button className="emoji-button favorite" onClick={handleClick}>☆</button>
  } else {
    likeButton = <button className="emoji-button favorite active" onClick={handleClick}>★</button>
  }
  //******************************* */

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE',
    })
    .then ((res) => res.json())
    .then(() => onDelete(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite" onClick={handleClick}>{likeButton}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
