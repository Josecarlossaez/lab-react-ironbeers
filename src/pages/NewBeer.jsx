import React from 'react'
import {Link} from "react-router-dom"
import imageHome from "../assets/imagehome.png"

function NewBeer() {
  return (
    <div>
      <nav>
      <Link to="/">
        <img src={imageHome} alt="" />
      </Link>
    </nav>
    <h3>New Beer</h3>
    </div>
  )
}

export default NewBeer