import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h4>Number of Items in Cart:{state.numOfItems}</h4>
      <button className="green" onClick={() => dispatch(addItem())}>
        Add Item
      </button>
      <button
        disabled={state.numOfItems <= 0 ? true : false}
        className="red"
        onClick={() => dispatch(deleteItem())}
      >
        Delete Item
      </button>
    </div>
  );
};

export default Cart;
