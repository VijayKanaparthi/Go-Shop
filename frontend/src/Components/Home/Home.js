import { Component } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import hero from "../../Assests/Hero_image.png"
import womens_banner from "../../Assests/women_bananer1.png"
import mens_banner from "../../Assests/mens_banner.png"
import womens_banner2 from "../../Assests/women_banner2.png"
import kids_banner from "../../Assests/kids_banner.png"
import products_banner from "../../Assests/products_banner.png"
import customer1 from "../../Assests/customer1.jpg"
import customer2 from "../../Assests/customer2.jpg"
import customer4 from "../../Assests/customer4.jpg"
import customer5 from "../../Assests/customer5.jpg"
import { PiFlowerLotusFill } from "react-icons/pi"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import NewContext from "../../context/NewContext"

class Home extends Component {
  render() {
    return (
      <NewContext.Consumer>
        {(value) => {
          const { addCart, addToCart } = value
          return (
            <div className="home-container">
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
              <div className="home">
                <div className="home-part1">
                  <div>
                    <h1>
                      SHOPPING <br />
                      <span>AT HOME</span>
                    </h1>
                    <p>
                      Unbeatable prices, exclusive offers, and the latest
                      trends—everything you need, just a click away.
                      <br />
                      <span>
                        Fast Shipping | Easy Returns | 24/7 Customer Support
                      </span>
                    </p>
                    <button type="button">
                      Get Started <FaLongArrowAltRight size={20} />{" "}
                    </button>
                  </div>
                </div>
                <div className="home-part2">
                  <img src={hero} alt="Shopping" />
                </div>
              </div>
              <h1 style={{ padding: "0px 50px", fontWeight: "700" }}>
                Browse through my clothing collection
              </h1>
              <div className="self-container">
                <div className="top">
                  <div className="top-right">
                    <Link to="/men">
                      <img src={mens_banner} alt="mens" className="mens-row" />
                    </Link>
                  </div>
                  <div className="top-left">
                    <Link to="/women">
                      <img
                        src={womens_banner2}
                        alt="womens"
                        className="womens-row"
                      />
                    </Link>
                  </div>
                </div>

                <div className="center-self">
                  <img
                    src={womens_banner}
                    alt="womens-banner"
                    className="women-banner-home"
                  />
                </div>
                <div className="bottom-self">
                  <div className="bottom-left">
                    <Link to="/products">
                      <img
                        src={products_banner}
                        alt="product-banner"
                        className=""
                      />
                    </Link>
                  </div>
                  <div className="botttom-right">
                    <Link to="/kids">
                      <img src={kids_banner} alt="kids-banner" className="" />
                    </Link>
                  </div>
                </div>
              </div>
              <h1 className="customer-heading">Hear from Our Happy Shoppers</h1>
              <ul className="customer-container">
                <li className="customer-card">
                  <div>
                    <img src={customer1} alt="customer" className="customer" />
                  </div>
                  <div className="customer-part2">
                    <h1>Priya Mehta</h1>
                    <p>
                      The delivery was super fast! I ordered a jacket, and it
                      arrived in perfect condition within two days. Absolutely
                      love the product quality!
                    </p>
                  </div>
                </li>
                <li className="customer-card">
                  <div>
                    <img src={customer2} alt="customer" className="customer" />
                  </div>
                  <div className="customer-part2">
                    <h1>Sneha Reddy</h1>
                    <p>
                      Great shopping experience! The support team was very
                      responsive when I had a payment issue. They resolved it
                      immediately, and the process was smooth.
                    </p>
                  </div>
                </li>
                <li className="customer-card">
                  <div>
                    <img src={customer4} alt="customer" className="customer" />
                  </div>
                  <div className="customer-part2">
                    <h1> Amit Sharma</h1>
                    <p>
                      I love the collection and pricing! I got exactly what I
                      was looking for, and the size fit perfectly. Amazing value
                      for money!
                    </p>
                  </div>
                </li>
                <li className="customer-card">
                  <div>
                    <img src={customer5} alt="customer" className="customer" />
                  </div>
                  <div className="customer-part2">
                    <h1>Karan Singh</h1>
                    <p>
                      I ordered three items, but one arrived slightly late.
                      However, the quality exceeded my expectations. I’ll
                      recommend your store to friends!
                    </p>
                  </div>
                </li>
              </ul>

              <footer class="footer">
                <div class="footer-container">
                  <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>
                      Welcome to GoSHop, India’s trusted destination for quality
                      products at unbeatable prices. We are committed to
                      delivering the best shopping experience and providing
                      top-notch customer service.
                    </p>
                    <p>&copy; 2024 GoSHop. All rights reserved.</p>
                  </div>

                  <div class="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="/faq">FAQs</a>
                      </li>
                      <li>
                        <a href="/careers">Careers</a>
                      </li>
                    </ul>
                  </div>

                  <div class="footer-section policy">
                    <h2>Policies</h2>
                    <ul>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/terms-conditions">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="/return-policy">Return & Refund Policy</a>
                      </li>
                      <li>
                        <a href="/shipping-policy">Shipping Policy</a>
                      </li>
                    </ul>
                  </div>

                  <div class="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>
                      <strong>Email:</strong> vijaymca2025@gmail.com
                    </p>
                    <p>
                      <strong>Customer Care:</strong> 1800-123-456 (Toll-Free)
                    </p>
                    <p>
                      <strong>Address:</strong> [Chennai City, India]
                    </p>
                  </div>
                </div>

                <div class="footer-bottom">
                  <p>Follow us on:</p>
                  <div class="social-icons">
                    <a
                      href="https://www.facebook.com/yourstore"
                      target="_blank"
                    >
                      Facebook
                    </a>{" "}
                    |
                    <a
                      href="https://www.instagram.com/yourstore"
                      target="_blank"
                    >
                      Instagram
                    </a>{" "}
                    |
                    <a href="https://www.twitter.com/yourstore" target="_blank">
                      Twitter
                    </a>{" "}
                    |
                    <a
                      href="https://www.linkedin.com/in/vijay-kanaparthi/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          )
        }}
      </NewContext.Consumer>
    )
  }
}
export default Home
