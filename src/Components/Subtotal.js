import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useSelector } from 'react-redux'
import { cartTotal } from '../store/cartSlice'

function Subtotal() {
  const items = useSelector(state => state.cart)
  return (
    <div className='subtotal'>
    <CurrencyFormat
    renderText={(value)=>(
    <>
    <p>
        Subtotal ( {items.length} items):<strong>{value}</strong>
    </p>
    <small className='subtotal__gift'>
        <input type="checkbox"/> This order contains agift </small>
    
    </>
  )}
  decimalScale={2}
  value={cartTotal(items)}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"₹"}
    />

    <button >Proced To Checkout</button>

        </div>
  )
}

export default Subtotal