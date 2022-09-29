import React from "react";

function CartoonCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.imageSource} alt="" />
    </div>
  );
}

export default CartoonCard;
