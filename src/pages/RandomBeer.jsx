import React from 'react'
import {Link} from "react-router-dom"
import imageHome from "../assets/imagehome.png"
function RandomBeer() {
  return (
    <div>
    <nav>
    <Link to="/">
      <img src={imageHome} alt="" />
    </Link>
  </nav>
  <h3>Random Beer</h3>
  </div>
  )
}

export default RandomBeer