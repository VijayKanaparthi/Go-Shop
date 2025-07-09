import { Component } from "react"
import { PiFlowerLotusFill } from "react-icons/pi"
import Popup from "reactjs-popup"
import { MdCancel } from "react-icons/md"
import { MdOutlineDoubleArrow } from "react-icons/md"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "./Men.css"
import Navbar from "../Navbar/Navbar"
import mens_banner from "../../Assests/mens_banner.png"
import NewContext from "../../context/NewContext"

const colors = [
  "black",
  "red",
  "yellow",
  "green",
  "white",
  "blue",
  "light-blue",
  "cement",
  "pink",
  "orange",
]

class Men extends Component {
  state = { mensData: [], scrolls: 0 }

  componentDidMount() {
    this.getMenData()
  }

  getMenData = async () => {
    const response = await fetch("http://localhost:4000/men")
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
    this.setState({ mensData: responseData })
  }

  scroll = (way) => {
    if (way === "left") {
      this.setState((pre) => ({ scrolls: pre.scrolls - 1 }))
    } else if (way === "right") {
      this.setState((pre) => ({ scrolls: pre.scrolls + 1 }))
    }
  }

  randomNumber = () => {
    const num = Math.floor(Math.random() * 10)

    return num
  }

  render() {
    const { mensData, scrolls } = this.state

    return (
      <NewContext.Consumer>
        {(value) => {
          const { addCart, addToCart } = value

          const addClicked = (each) => {
            const newProduct = {
              id: each.id,
              name: each.name,
              image_url: each.image_url[0],
              originalRate: each.originalRate,
              discountRate: each.discountRate,
              stockAvailability: each.stockAvailability,
            }
            addToCart(newProduct)
            alert("Item added to cart!")
          }

          return (
            <div className="men-container">
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
                src={mens_banner}
                alt="mens banner"
                className="mens-banner"
              />

              <h1 className="men-heading">
                Upgrade Your Wardrobe – Men’s Latest Fashion
              </h1>
              <ul className="mens-card">
                {mensData.map((each) => (
                  <Popup
                    modal
                    trigger={
                      <li key={each.id} className={colors[this.randomNumber()]}>
                        <div className="men-card1">
                          <img
                            src={each.image_url[0]}
                            alt="mens cloths"
                            className="men-card-img"
                          />
                        </div>
                        <div className="men-card2">
                          <h1>{each.name}</h1>
                          <div>
                            <p className="price-text">
                              Price : <span>{each.originalRate}</span>
                            </p>
                            <p className="discount">{each.discountRate}</p>
                          </div>
                        </div>
                      </li>
                    }
                  >
                    {(close) => (
                      <div className="popup">
                        <div className="popup-container">
                          <button
                            className="popup-button"
                            type="button"
                            onClick={() => close()}
                          >
                            <MdCancel size={40} />
                          </button>
                          <div className="popup-up">
                            <div>
                              <button
                                className="button1"
                                type="button"
                                onClick={() => this.scroll("left")}
                              >
                                <MdOutlineDoubleArrow size={100} />
                              </button>
                            </div>
                            <div className="image-cont">
                              <img
                                src={each.image_url[scrolls]}
                                alt=""
                                className="popup-image"
                              />
                            </div>
                            <div>
                              <button
                                className="button2"
                                type="button"
                                onClick={() => this.scroll("right")}
                              >
                                <MdOutlineDoubleArrow size={100} />
                              </button>
                            </div>
                          </div>
                          <div className="popup-down">
                            <div className="box">
                              <h1>{each.name}</h1>
                              <p>Raymond</p>
                              <p>
                                {each.shortDescription}Elevate your everyday
                                style with this breathable cotton shirt,
                                designed for ultimate comfort. Its slim fit adds
                                a modern touch, making it perfect for both
                                casual outings and smart-casual events. The soft
                                fabric ensures all-day ease, while the durable
                                stitching guarantees long-lasting wear. Pair it
                                with jeans or chinos for a polished look.
                                Available in multiple colors to match your vibe
                                effortlessly.
                              </p>
                              <p
                                className={
                                  each.stockAvailability === "In Stock"
                                    ? "stock"
                                    : "no-stock "
                                }
                              >
                                {each.stockAvailability}
                              </p>
                              <p>{each.careInstructions}</p>
                              <p className="rate">
                                ₹ <span>{each.originalRate}</span>{" "}
                                {each.discountRate}
                              </p>
                              <button
                                type="button"
                                className="buy-now"
                                onClick={() => addClicked(each)}
                              >
                                Buy Now
                              </button>
                              <button
                                type="button"
                                className="add-cart"
                                onClick={() => addClicked(each)}
                              >
                                Add Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
export default Men
