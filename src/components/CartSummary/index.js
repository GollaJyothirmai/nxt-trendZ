// Write your code here
import './index.css'

import CartContent from '../../context/CartContext'

const CartSummary = () => (
  <CartContent.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-summary">
          <h1 className="summary-heading">
            Order Total : <span>{total}</span>
          </h1>
          <p className="count">{cartList.length} Items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContent.Consumer>
)

export default CartSummary
