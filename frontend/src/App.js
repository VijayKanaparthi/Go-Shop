import { Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
import Men from "./Components/Men/Men"
import Women from "./Components/Women/Women"
import Kids from "./Components/Kids/Kids"
import Products from "./Components/Products/Products"
import NewContext from "./context/NewContext"
import { Component } from "react"
import Cart from "./Components/Cart/Cart"

class App extends Component {
  state = { addCart: [] }

  addToCart = (cart) => {
    this.setState((pre) => ({ addCart: [...pre.addCart, cart] }))
  }

  deleteProduct = (id) => {
    const { addCart } = this.state
    const updateList = addCart.filter((each) => each.id !== id)
    this.setState({ addCart: updateList })
  }

  render() {
    const { addCart } = this.state
    console.log(addCart)

    return (
      <NewContext.Provider
        value={{
          addCart,
          addToCart: this.addToCart,
          deleteProduct: this.deleteProduct,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/men" component={Men} />
          <ProtectedRoute exact path="/women" component={Women} />
          <ProtectedRoute exact path="/kids" component={Kids} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </Switch>
      </NewContext.Provider>
    )
  }
}

export default App
