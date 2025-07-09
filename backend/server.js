import express, { request, response } from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import cors from "cors"
import Data from "./models/schema.js"
import Login from "./models/login.js"

const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup", async (request, response) => {
  try {
    const loginDetails = request.body
    const result = await Login.create(loginDetails)
    response.status(201).json({ message: "Successfully Created", data: result })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body
    const user = await Login.find({ username })
    if (!user) {
      return response
        .status(404)
        .json({ message: "Username and Password Invalid" })
    }
    const my_secret_key = "Vijay"
    const payload = {
      userId: user._id,
      username: username,
      password: password,
    }
    const options = {
      expiresIn: "1h",
    }
    const jwtToken = jwt.sign(payload, my_secret_key, options)
    response.status(200).json({ ok: true, jwtToken: jwtToken })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.post("/men", async (request, response) => {
  //const {name,original_rate,discount_rate,image_url,short_description,material,stock_availability,brand,gender,care_instructions} = request.body

  try {
    const mensData = request.body
    const result = await Data.create(mensData)
    response.status(201).json({ message: "Succesfully inserted", data: result })
  } catch (error) {
    response.status(500).json({
      message: "Error inserting products",
      error: error.message,
    })
  }
})

app.post("/women", async (request, response) => {
  try {
    const womensData = request.body
    const result = await Data.create(womensData)
    response
      .status(201)
      .json({ message: "Successfully Inserted", data: result })
  } catch (error) {
    response.status(500).json({
      message: "Error inserting products",
      error: error.message,
    })
  }
})

app.post("/kids", async (request, response) => {
  try {
    const kidsData = request.body
    const result = await Data.create(kidsData)
    response
      .status(201)
      .json({ message: "SuccessFully Inserted", data: result })
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error inserting products", error: error.message })
  }
})

app.post("/products", async (request, response) => {
  try {
    const products = request.body
    const result = await Data.create(products)
    response
      .status(201)
      .json({ message: "Successfully Inserted", data: result })
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error inserting Data", error: error.message })
  }
})

app.get("/products", async (request, response) => {
  try {
    const data = await Data.find({ category: { $eq: "products" } })
    response.status(201).json({ data: data })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.get("/kids", async (request, response) => {
  try {
    const data = await Data.find({ category: { $eq: "kids" } })
    response.status(200).json({ data: data })
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error Getting Data", error: error.message })
  }
})

app.get("/women", async (request, response) => {
  try {
    const data = await Data.find({ category: { $eq: "women" } })
    response.status(200).json({ data: data })
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error Getting Data", error: error.message })
  }
})

app.get("/men", async (request, response) => {
  try {
    const data = await Data.find({ category: { $eq: "men" } })
    response.status(200).json({ data: data })
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error Getting data", error: error.message })
  }
})

mongoose
  .connect(
    "mongodb+srv://vijay:vijay@vijay.doiz4.mongodb.net/?retryWrites=true&w=majority&appName=vijay"
  )
  .then(() =>
    app.listen(4000, () => {
      console.log("DB Connected and Server Running at 4000")
    })
  )
  .catch((e) => {
    console.log(e.message)
  })
