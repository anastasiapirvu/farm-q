import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import farmerData from "./FarmerData";
import "./ProductDisplay.css";

// Import properties (props) passed down from parent (LeafletMap) component
function ProductDisplay(props) {

  // Use data form another folder
  const [data, setData] = useState(farmerData);
  const [total, setTotal] = useState(0);

  // Function to check if item is still in the list
  const itemInList = (itemId, itemList) => {
    for (let item of itemList) {
      if (item.ids === itemId) {
        return item.units >= 1;
      }
    }
    return false;
  };

  const addToCart = (matchingId) => {
    if (itemInList(matchingId, props.products)) {
      let answer = props.products.map((p) =>

        // ternary operator - compare the ID passed with the product id
        p.ids === matchingId ? { ...p, units: p.units-- } : p
      );

      // Add initial value + new value
      let newTotal = total + answer[matchingId - 1].price;

      // Update total
      setTotal(newTotal);

      // Update state with new value
      setData(answer);
    }
  };

  return (
    <table className="ProductDisplay">
      <thead>
        <tr>
          <th>Product</th>
          <th>Image</th>
          <th>Price</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p) => (
          <tr>
            <td>{p.name}</td>
            <td>
              <Avatar src={p.url} />
            </td>
            <td>{p.price}€</td>
            <td>
              <input className="productUnits" value={p.units}></input>
            </td>
            <td>
              <button
                className="addToCart"
                id="addToCart"
                type="button"
                onClick={() => addToCart(p.ids)}
              >
                +
              </button>
            </td>
          </tr>
        ))}

        <div className="CartTotal">
          <strong className="CartTotalTitle">Total</strong>
          <span className="CartTotalPrice">{total.toFixed(1)}</span>
        </div>
      </tbody>
    </table>
  );
}

export default ProductDisplay;
