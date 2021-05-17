import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import farmerData from "./FarmerData";
import "./ProductDisplay.css";


// Import properties (props) passed down from parent (LeafletMap) component
function ProductDisplay(props) {


  // Use data form another folder 
  const [data, setData] = useState(farmerData);

  const [total, setTotal] = useState(0);

  const addToCart = (matchingId) => {

    // loop over each product

    let answer = props.products.map(p =>
      // ternary operators - compare the ID passed with the product id
      (p.ids === matchingId) ? (p.units >= 1) ? { ...p, units: p.units-- } : p : p
    )

    // Add initial value + new value
    let newTotal = total + answer[matchingId - 1].price;



    // Find object to keep track of the products

    // Update total
    setTotal(newTotal);


    // Update state with new value
    setData(answer);

  }



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

        {props.products.map(p => (
          <tr>
            <td>{p.name}</td>
            <td><Avatar src={p.url} /></td>
            <td>{p.price}€</td>
            <td><input className="productUnits" value={p.units}></input></td>
            <td><button className="addToCart" id="addToCart" type="button" onClick={() => addToCart(p.ids)}>+</button></td>

          </tr>



        ))}

        <div className="CartTotal">
          <strong className="CartTotalTitle">Total</strong>
          <span className="CartTotalPrice">{(total.toFixed(1))}</span>
        </div>

      </tbody>
    </table>

  );
}



export default ProductDisplay;
