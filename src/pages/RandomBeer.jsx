import React from 'react'
import {Link} from "react-router-dom"
import imageHome from "../assets/imagehome.png"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'



function RandomBeer() {
  
  // crear el estado donde estarán los detalles
  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  console.log("details",details)
  // buscar info en el servidor con useEffect
  useEffect(() => {
    getData()
    
  },[])
  const getData = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      console.log("response",response)
      
      
      setDetails(response.data)
      // actualizar la data
      
      setIsFetching(false)
      
    } catch (error) {
      console.log(error)
      
    }
    
  }
  // clausula de guardia
  
  if (isFetching === true){
    return <h2>....Buscando</h2>
  }
  // número Random
  const randomNum = Math.floor(Math.random() * details.length)
  console.log(randomNum)
   
  // renderizar
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
    <nav>
    <Link to="/">
      <img src={imageHome} alt="" />
    </Link>
  </nav>
  <h3>Random Beer</h3>
  <div style={{width:"650px"}}>
  <img src={details[randomNum].image_url} alt="beer" width="100px" />
  <div style={{display:"flex", justifyContent:"space-between"}}>
     <div>   
       <h2>{details[randomNum].name}</h2>
        <h4>{details[randomNum].tagline}</h4>
     </div>
     <div>
        <h2>{details[randomNum].attenuation_level}</h2>
        <p>{details[randomNum].first_brewed}</p>
    </div>
  </div>
  <p>{details[randomNum].description}</p>
  <p>{details[randomNum].contributed_by}</p>

</div>


    </div>
  
  )
}

export default RandomBeer