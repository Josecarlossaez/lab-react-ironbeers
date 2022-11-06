import React from 'react'
import {Link} from "react-router-dom"
import imageHome from "../assets/imagehome.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import axios from 'axios';

function NewBeer() {
  // crear los estados para cada campo controlado
  const [ nameInput, setNameInput ] = useState("")
  const [ taglineInput, setTaglineInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ first_brewedInput, setFirst_brewedInput ] = useState("")
  const [ brewers_tipsInput, setBrewers_tipsInput ] = useState("")
  const [ attenuation_levelInput, setAttenuation_levelInput ] = useState(0)
  const [ contributed_nameInput, setContributed_nameInput ] = useState("")

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleTaglineChange = (event) => setTaglineInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleFirst_brewedChange = (event) => setFirst_brewedInput(event.target.value)
  const handleBrewers_tipsChange = (event) => setBrewers_tipsInput(event.target.value)
  const handleAttenuation_levelChange = (event) => setAttenuation_levelInput(event.target.value)
  const handleContributed_nameChange = (event) => setContributed_nameInput(event.target.value)

  const handleSumbit = async (event) => {
    event.preventDefault()
    console.log("intentando añadir cerveza")

    // creamos el objeto para añadir, como en un .create
    const addBeer = {
      name: nameInput,
      tagline:taglineInput,
      description:descriptionInput,
      first_brewed:first_brewedInput,
      brewers_tips:brewers_tipsInput,
      attenuation_level:attenuation_levelInput,
      contributed_name:contributed_nameInput
    }
    try {
      // contactamos con el servidor para que cree la cerveza y nos de respuest
      await axios.post(" https://ih-beers-api2.herokuapp.com/beers/new", addBeer)
      
      // indicamos a React que la lista se ha actualizado, no hace falta porque son distintas páginas
     
    } catch (error) {
      console.log(error)
      
    }
  }


  return (
    <div>
      <nav>
      <Link to="/">
        <img src={imageHome} alt="" />
      </Link>
    </nav>
    <h3>Create a New Beer</h3>
    <div>
    <form action="">
<label htmlFor="name">Name: </label>
<input value={nameInput} type="text" name="name" onChange={handleNameChange} />
<br />
<label htmlFor="tagline">Tagline:  </label>
<input checked={taglineInput} type="text" name="tagline" onChange={handleTaglineChange}/>
<br />
<label htmlFor="description">Description: </label>
<input value={descriptionInput} type="text" name="description" onChange={handleDescriptionChange}/>
<br />
<label htmlFor="first_brewed">First_brewed: </label>
<input value={first_brewedInput} type="text" name="first_brewed" onChange={handleFirst_brewedChange}/>
<br />
<label htmlFor="brewers_tips">Brewers_tips: </label>
<input value={brewers_tipsInput} type="text" name="brewers_tips" onChange={handleBrewers_tipsChange}/>
<br />
<label htmlFor="attenuation_level">Attenuation_level: </label>
<input value={attenuation_levelInput} type="number" name="attenuation_level" onChange={handleAttenuation_levelChange}/>
<br />
<label htmlFor="contributed_name">Contributed_name: </label>
<input value={contributed_nameInput} type="text" name="contributed_name" onChange={handleContributed_nameChange}/>
<br />
<button onClick={handleSumbit}>Agregar</button>
     </form> 
    </div>
    </div>
  )
}

export default NewBeer