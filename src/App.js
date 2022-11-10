import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image}
        totalPrice={totalPrice} updatePrice={setTotalPrice} items={items} setItems={setItems}/>// replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {items.map((item) => {return <p>{item}</p>;})}
        <h3>Total Price = ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default App;
