import { Component } from "react"
import { PiFlowerLotusFill } from "react-icons/pi"
import { MdCancel } from "react-icons/md"
import "./Products.css"
import Navbar from "../Navbar/Navbar"
import products_banner from "../../Assests/products_banner.png"
import NewContext from "../../context/NewContext"
import Popup from "reactjs-popup"

const colors = [
  "products-black",
  "products-red",
  "products-yellow",
  "products-green",
  "products-white",
  "products-blue",
  "products-light-blue",
  "products-cement",
  "products-pink",
  "products-orange",
]

class Products extends Component {
  state = { productsData: [] }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    const responseData = data.data.map((each) => ({
      id: each._id,
      name: each.name,
      brand: each.brand,
      careInstructions: each.care_instructions,
      category: each.category,
      discountRate: each.discount_rate,
      gender: each.gender,
      image_url: each.image_url,
      material: each.material,
      originalRate: each.original_rate,
      shortDescription: each.short_description,
      stockAvailability: each.stock_availability,
    }))
    this.setState({ productsData: responseData })
  }

  randomNum = () => {
    return Math.floor(Math.random() * 10)
  }

  render() {
    const { productsData } = this.state
    return (
      <NewContext.Consumer>
        {(value) => {
          const { addToCart } = value

          const productsCardClicked = (product) => {
            addToCart(product)
            alert("Item Added Into Cart!")
          }

          return (
            <div className="products-container">
              <Navbar />
              <div className="decaration">
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
                <p>
                  <PiFlowerLotusFill />
                </p>
              </div>
              <img
                src={products_banner}
                alt="kids-banner"
                className="products-banner"
              />
              <h1 style={{ padding: "10px 50px" }}>
                Electronics for Every Lifestyle: Smart Choices Await
              </h1>
              <ul className="products-card-container">
                {productsData.map((each) => (
                  <Popup
                    modal
                    trigger={
                      <li className={colors[this.randomNum()]}>
                        <div className="products-card-image-container">
                          <img
                            src={each.image_url}
                            alt={each.name}
                            className="products-card-image"
                          />
                        </div>
                        <div className="products-text">
                          <h1>{each.name}</h1>
                          <p className="products-brand">{each.brand}</p>
                          <p>
                            <span>Price: {each.originalRate}</span>{" "}
                            {each.discountRate}
                          </p>
                        </div>
                      </li>
                    }
                  >
                    {(close) => {
                      return (
                        <div className="products-popup-container">
                          <div className="products-popup">
                            <button
                              className="popup-button"
                              type="button"
                              onClick={() => close()}
                            >
                              <MdCancel size={50} />
                            </button>
                            <div className="products-popup-image-container">
                              <img
                                src={each.image_url}
                                alt={each.name}
                                className="products-popup-image"
                              />
                            </div>
                            <div className="products-text-container">
                              <h1>{each.name}</h1>
                              <p>{each.shortDescription}</p>
                              <p>{each.brand}</p>
                              <p>{each.stockAvailability}</p>
                              <p>
                                Price: {each.originalRate} {each.discountRate}
                              </p>
                              <button
                                type="button"
                                className="buy-now"
                                onClick={() => productsCardClicked(each)}
                              >
                                Buy Now
                              </button>
                              <button
                                type="button"
                                className="add-cart"
                                onClick={() => productsCardClicked(each)}
                              >
                                Add Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  </Popup>
                ))}
              </ul>
            </div>
          )
        }}
      </NewContext.Consumer>
    )
  }
}
export default Products
