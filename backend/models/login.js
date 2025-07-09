import mongoose from "mongoose"

const authentication = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
const Login = mongoose.model("login", authentication)
export default Login
