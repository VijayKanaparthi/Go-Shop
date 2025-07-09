import { Component } from "react"
import { Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import logo from "../../Assests/website_logo.png"
import "./Login.css"

class Login extends Component {
  state = { username: "", password: "" }

  getUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  getPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  navigateNext = (jwtToken) => {
    const { history } = this.props
    console.log(history)

    Cookies.set("jwt_token", jwtToken, { expires: 30 })
    history.replace("/")
  }

  login = async (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const userDetails = { username, password }
    const url = "http://localhost:4000/login"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwtToken)

    if (response.ok === true) {
      this.navigateNext(data.jwtToken)
    }
  }

  render() {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="login-card" onSubmit={this.login}>
          <img src={logo} alt="" />
          <input
            type="text"
            placeholder="Enter Username"
            onChange={this.getUsername}
          />
          <input
            type="text"
            placeholder="Enter Password"
            onChange={this.getPassword}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}
export default Login
