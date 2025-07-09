import { Component } from "react"
import { PiFlowerLotusFill } from "react-icons/pi"
import { MdCancel } from "react-icons/md"
import "./Women.css"
import Navbar from "../Navbar/Navbar"
import womens_banner from "../../Assests/women_banner2.png"
import Popup from "reactjs-popup"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
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

class Women extends Component {
  state = { womensData: [] }

  componentDidMount() {
    this.getWomenVideos()
  }

  getWomenVideos = async () => {
    const response = await fetch("http://localhost:4000/women")
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
    this.setState({ womensData: responseData })
  }

  renderColors = () => {
    return Math.floor(Math.random() * 10)
  }

  render() {
    const { womensData } = this.state
    console.log(womensData)

    return (
      <NewContext.Consumer>
        {(value) => {
          const { addCart, addToCart } = value

          const womenClicked = (product) => {
            addToCart(product)
            alert("Item Added To Cart!")
          }

          return (
            <>
              <div className="women-container">
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
                  src={womens_banner}
                  alt="women banner"
                  className="women-banner"
                />
                <h1 className="women-heading">
                  Revamp Your Wardrobe – Shop the Latest Women’s Fashion Trends!
                </h1>
                <ul className="womens-cards-container">
                  {womensData.map((each) => (
                    <Popup
                      modal
                      trigger={
                        <li
                          key={each.id}
                          className={colors[this.renderColors()]}
                        >
                          <div>
                            <img
                              src={each.image_url}
                              alt={each.name}
                              className="women-card-image"
                            />
                          </div>
                          <div className="women-card-part2">
                            <h1>{each.name}</h1>
                            <p>
                              Price:{" "}
                              <span className="original-rate-women">
                                {each.originalRate}
                              </span>
                              <span className="discount-rate-women">
                                {" "}
                                {each.discountRate}
                              </span>
                            </p>
                          </div>
                        </li>
                      }
                    >
                      {(close) => (
                        <div className="women-popup-container">
                          <div className="women-popup">
                            <button
                              type="button"
                              className="women-cancel-button"
                              onClick={() => close()}
                            >
                              <MdCancel size={50} />
                            </button>
                            <div className="women-popup-image-section">
                              <img
                                src={each.image_url[0]}
                                alt={each.name}
                                className="women-popup-image"
                              />
                            </div>
                            <div className="women-popup-part2-section">
                              <h1>{each.name}</h1>
                              <p>
                                {each.shortDescription} Elevate your everyday
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
                              <p className="stock">{each.stockAvailability}</p>
                              <p>{each.careInstructions}</p>
                              <p className="popup-dicount-rate-women">
                                ₹{" "}
                                <span className="popup-original-rate-women">
                                  {each.originalRate}
                                </span>{" "}
                                {each.discountRate}
                              </p>
                              <button
                                type="button"
                                className="buy-now"
                                onClick={() => womenClicked(each)}
                              >
                                Buy Now
                              </button>
                              <button
                                type="button"
                                className="add-cart"
                                onClick={() => womenClicked(each)}
                              >
                                Add Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  ))}
                </ul>
              </div>
            </>
          )
        }}
      </NewContext.Consumer>
    )
  }
}
export default Women
