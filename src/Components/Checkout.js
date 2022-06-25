import React from "react";
import "./Checkout.css";
import { remove } from "../store/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import Subtotal from "./Subtotal";

// import { useStateValue } from "./StateProvider";
// import CheckoutProduct from "./CheckoutProduct";

function Cart() {
const dispatch = useDispatch();
const items = useSelector(state => state.cart)

const RemoveFromBasket=(productId)=>{

  
  console.log(productId)
  dispatch(remove(productId))

}

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
           {/* <h3>Hello, {user?.email}</h3> */}
          <h2 className="checkout__title">Your shopping Basket</h2>
          <div>
            {items.map(item => (
              <div className="product">
           
                <p>{item.title}</p>
                <p className="product__price">
          <small>₹</small>
          <strong>{item.price}</strong>
        </p>
        <div className="product__rating">
        {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
                <img src={item.image}></img>
            
              <div className="product">

                <button onClick={()=>RemoveFromBasket(item.id)}>Remove</button>
              </div>
              </div>
            ) 
              

            )}
          </div>




         {/* {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}

        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
        <Subtotal  />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Cart;