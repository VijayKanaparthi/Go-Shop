import { Component } from "react"
import { PiFlowerLotusFill } from "react-icons/pi"
import { MdCancel } from "react-icons/md"
import "./Kids.css"
import Navbar from "../Navbar/Navbar"
import kids_banner from "../../Assests/kids_banner.png"
import Popup from "reactjs-popup"
import NewContext from "../../context/NewContext"

const colors = [
  "kids-black",
  "kids-red",
  "kids-yellow",
  "kids-green",
  "kids-white",
  "kids-blue",
  "kids-light-blue",
  "kids-cement",
  "kids-pink",
  "kids-orange",
]

class Kids extends Component {
  state = { kidsData: [] }

  componentDidMount() {
    this.getKidsData()
  }

  getKidsData = async () => {
    const response = await fetch("http://localhost:4000/kids")
    const data = await response.json()
    console.log(data)

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
    this.setState({ kidsData: responseData })
  }

  randomNum = () => {
    return Math.floor(Math.random() * 10)
  }

  render() {
    const { kidsData } = this.state
    return (
      <NewContext.Consumer>
        {(value) => {
          const { addToCart } = value

          const kidsCardClicked = (product) => {
            addToCart(product)
            alert("Item Added Into Cart!")
          }

          return (
            <div className="kids-container">
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
                src={kids_banner}
                alt="kids-banner"
                className="kids-banner"
              />
              <h1 style={{ padding: "10px 50px" }}>
                Fashion Fun for Little Legends!
              </h1>
              <ul className="kids-card-container">
                {kidsData.map((each) => (
                  <Popup
                    modal
                    trigger={
                      <li className={colors[this.randomNum()]}>
                        <div className="kids-card-image-container">
                          <img
                            src={each.image_url}
                            alt={each.name}
                            className="kids-card-image"
                          />
                        </div>
                        <div className="kids-text">
                          <h1>{each.name}</h1>
                          <p className="kids-brand">{each.brand}</p>
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
                        <div className="kids-popup-container">
                          <div className="kids-popup">
                            <button
                              className="popup-button"
                              type="button"
                              onClick={() => close()}
                            >
                              <MdCancel size={50} />
                            </button>
                            <div className="kids-popup-image-container">
                              <img
                                src={each.image_url}
                                alt={each.name}
                                className="kids-popup-image"
                              />
                            </div>
                            <div className="kids-text-container">
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
                                onClick={() => kidsCardClicked(each)}
                              >
                                Buy Now
                              </button>
                              <button
                                type="button"
                                className="add-cart"
                                onClick={() => kidsCardClicked(each)}
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
export default Kids
