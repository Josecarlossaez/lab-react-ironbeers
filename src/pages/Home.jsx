import React from 'react'
import {Link} from "react-router-dom"
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function Home() {
  return (
    <div>
        <div>
            <img src={beers} alt="allBeers" />
            <h3>
                <Link to="/beers">All Beers</Link>
            </h3>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
            are also reproduced in their exact original form, accompanied by English versions from 
            the 1914 translation by H. Rackham.</p>
        </div>
        <div>
            <img src={randomBeer} alt="RandomBeer" />
            <h3>
                <Link to="/aleatorio">Random Beer</Link>
            </h3>


            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
            
            are also reproduced in their exact original form, accompanied by English versions from 
            the 1914 translation by H. Rackham.</p>
        </div>
        <div>
            <img src={newBeer} alt="NewBeer" />
            <h3>
                <Link to="/new-beer">New Beer</Link>
            </h3>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
            
            are also reproduced in their exact original form, accompanied by English versions from the 
            1914 translation by H. Rackham.</p>
        </div>
    </div>
  )
}

export default Home