import mongoose from "mongoose"

const new_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  original_rate: {
    type: Number,
    required: true,
    min: 0,
  },
  discount_rate: {
    type: Number,
    required: true,
  },
  image_url: {
    type: [String],
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  stock_availability: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  care_instructions: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

const Data = mongoose.model("data", new_schema)

export default Data
