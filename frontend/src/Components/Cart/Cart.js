import { Component } from "react"
import Popup from "reactjs-popup"
import "./Cart.css"
import Navbar from "../Navbar/Navbar"
import NewContext from "../../context/NewContext"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min"

class Cart extends Component {
  state = { totalAmount: 0 }

  totalAmount = (addCart) => {
    let total = 0
    addCart.forEach((each) => {
      total += each.discountRate
    })
    return total
  }
  render() {
    return (
      <NewContext.Consumer>
        {(value) => {
          const { addCart, deleteProduct } = value

          const deleteItem = (id) => {
            deleteProduct(id)
          }

          return (
            <div className="cart-container">
              <Navbar />
              {addCart.length === 0 ? (
                <div className="empty-cart">
                  <h1>No items in your cart. Start</h1>
                  <Link to="/" className="link">
                    <button type="button">shopping now!</button>
                  </Link>
                </div>
              ) : (
                <>
                  <h1 className="cart-heading">
                    Check Out What’s in Your Cart:
                  </h1>
                  <ul className="cart-table">
                    <li style={{ fontWeight: 700 }}>Product Name</li>
                    <li style={{ fontWeight: 700 }}>Product Photo</li>
                    <li style={{ fontWeight: 700 }}>Product Original Price</li>
                    <li style={{ fontWeight: 700 }}>Product Discount Price</li>
                    <li style={{ fontWeight: 700 }}>Stock Availability</li>
                    <li style={{ fontWeight: 700 }}>Total</li>
                    <li style={{ fontWeight: 700, color: "red" }}>
                      {" "}
                      Product Cancel
                    </li>
                  </ul>
                  {addCart.map((each) => (
                    <ul className="cart-added">
                      <li>{each.name}</li>
                      <li>
                        <img src={each.image_url} alt="" />
                      </li>
                      <li>₹{each.originalRate}</li>
                      <li>₹{each.discountRate}</li>
                      <li style={{ color: "green", fontWeight: "600" }}>
                        {each.stockAvailability}
                      </li>
                      <li>₹{each.discountRate}</li>
                      <li>
                        <button
                          className="cancel-button"
                          onClick={() => deleteItem(each.id)}
                        >
                          Cancel
                        </button>
                      </li>
                    </ul>
                  ))}
                  <h1 className="cart-heading">Total Invoice Amount:</h1>
                  <div className="total-table">
                    <div className="total-table-heading">Total Items</div>
                    <div className="total-table-heading">Total Amount</div>
                  </div>
                  <div className="total-table">
                    <div className="total-table-text">
                      Items X {addCart.length}
                    </div>
                    <div className="total-table-text">
                      ₹{this.totalAmount(addCart)}
                    </div>
                  </div>
                  <div className="checkout-button-container">
                    <Popup
                      modal
                      trigger={
                        <button className="Checkout-button">
                          Move to Order Confirmation
                        </button>
                      }
                    >
                      {(close) => (
                        <div className="order-success-container">
                          <div className="order-success-card">
                            <h1>Your Order Confirmed✅</h1>
                            <button type="button" onClick={() => close()}>
                              Continue Shipping
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </>
              )}
            </div>
          )
        }}
      </NewContext.Consumer>
    )
  }
}
export default Cart
