import React from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  // const count = useSelector((state) => state.counter.value)
 const dispatch = useDispatch();
  

  
  const addToBasket =() =>{
    // dispatch({
     


   const item={
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating
    }
  // })
  console.log(item)
   dispatch(add(item));

  }


    // Dispatch({
      // type:"ADD_TO_BASKET",
      // item:{
      //   id:id,
      //   title:title,
      //   image:image,
      //   price:price,
      //   rating:rating,
  //     },
  //   });
    
  // };
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;