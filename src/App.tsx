import React, { useEffect, useState } from 'react';
import './App.css';
import { World } from './world';
import { Services } from './service';
import Product from './Product';
import {transform} from "./utils";
import ProductComponent from './Product';


function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  const [username, setUsername] = useState("")

  useEffect(() => {

    let services = new Services(username)
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
   
   }, [])

   function onProductionDone(): void {
    // calcul de la somme obtenue par la production du produit
    //let gain = p.revenu
    // ajout de la somme à l’argent possédé
    //addToScore(gain)
}
  return (
    <div>
       <div className="header">
      <div className="argent">  
           <div> <img id="logoMonde" src={services.server + world.logo} alt={"logo.png"}/><span id="worldName"> {world.name} </span></div>
           <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
      <div> <button type="button">multiplicateur</button></div>
      <div> ID du joueur </div>
    <span dangerouslySetInnerHTML={{__html: transform(world.score)}}/>
</div>
</div>

<div className="main">
          <div className="container1"> 
              <img src={services.server + world.logo}/> 
              <span> {world.name} </span>
                <button className="btnunlocks"> Unlocks</button>
                <button className="btncashupgrades"> Cash Upgrades</button>
                <button className="btnangelupgrades"> Angel Upgrades</button>
                <button className="btnManagers"> Managers</button>
                <button className="btninvestors"> Investors</button>
          </div>   
      </div>
      <div className="products">
                {world.products.product.map( p =>
                    <ProductComponent prod={ p } onProductionDone={onProductionDone} services={ services }  />
                    )}
            </div>
      </div>
  );
}


export default App;
