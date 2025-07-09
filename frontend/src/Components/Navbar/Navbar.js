import { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import Cookies from "js-cookie"
import logo from "../../Assests/e_commerce_logo.png"
import "./Navbar.css"
import NewContext from "../../context/NewContext"

class Navbar extends Component {
  logout = () => {
    const { history } = this.props
    Cookies.remove("jwt_token")
    history.replace("/login")
    console.log(history)
  }
  render() {
    return (
      <NewContext.Consumer>
        {(value) => {
          const { addCart } = value
          return (
            <div className="navbar-container">
              <img src={logo} alt="" className="" />
              <ul>
                <Link className="link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="link" to="/men">
                  <li>Men</li>
                </Link>
                <Link className="link" to="/women">
                  <li>Women</li>
                </Link>
                <Link className="link" to="/kids">
                  <li>Kids</li>
                </Link>
                <Link className="link" to="/products">
                  <li>Products</li>
                </Link>
              </ul>
              <div className="cart-button-container">
                <Link to="/cart" className="link">
                  <div className="cart">
                    <FaShoppingCart size={36} />
                    <p>{addCart.length}</p>
                  </div>
                </Link>

                <button type="button" onClick={this.logout}>
                  Logout
                </button>
              </div>
            </div>
          )
        }}
      </NewContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
