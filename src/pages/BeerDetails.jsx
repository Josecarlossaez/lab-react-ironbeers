import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import imageHome from "../assets/imagehome.png"

function BeerDetails() {
    // parámetro dinámico
    const {beerId} = useParams()
    // crear el estado donde estarán los detalles
    const [details, setDetails] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    // buscar info en el servidor con useEffect
    useEffect(() => {
      getData()

    },[])
    const getData = async () => {
try {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    console.log("response",response)
    const filterBeer= response.filter((eachBeer) => {
        if(eachBeer._id === beerId){
            return true
        }else{
            return false
        }
    })  
    console.log("filterBeer",filterBeer)
    setDetails(filterBeer)
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

    // renderizar

  return (
    <div>
    <nav>
    <Link to="/">
      <img src={imageHome} alt="home  " />
    </Link>
  </nav>
<h4>Beer Details</h4>
<img src={details.img_url} alt="beer" />
    </div>
  )
}

export default BeerDetails