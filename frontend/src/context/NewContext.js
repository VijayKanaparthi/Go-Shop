import React from "react"

const NewContext = React.createContext({
  addCart: [],
  addToCart: () => {},
  deleteProduct: () => {},
})

export default NewContext
