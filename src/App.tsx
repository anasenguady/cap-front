import React, { useEffect, useState } from 'react';
import './App.css';
import { Product, World } from './world';
import { Services } from './Services';
import {transform} from "./utils";
import ProductComponent from './Product';


function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  const [username, setUsername] = useState("")
  let [qtmulti , setQtmulti]= useState("")
  const [money,setMoney] = useState(world.money)

  useEffect(() => {

    let services = new Services(username)
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
   
   }, [])

   function onProductionDone(p: Product): void {
    // calcul de la somme obtenue par la production du produit
    let gain = p.revenu
    // ajout de la somme à l’argent possédé
    addToScore(gain)
   }


    function addToScore(gain: number): void{
      world.score += gain
  }

  function getMoney(){
    return world.money
  }
  
  function cycle() {
    switch (qtmulti){
      case "x1":
        qtmulti = "x10";
        break;
      case "x10":
        qtmulti = "x100";
        break;
      case "x100":
        qtmulti = "MAX";
        break;
      case "MAX":
        qtmulti = "x1";
        break;
 }
}

  

  return (
    <div>
       <div className="header">
      <div className="argent">
           <div> <img id="logoMonde" src={services.server + world.logo} alt={"logo.png"}/><span id="worldName"> {world.name} </span></div>
           <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
      <div> Multiplicateur :<button onClick={cycle}> {qtmulti} </button></div>
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
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[0]}  services={services} money={money}/>
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[1]}  services={services} money={money}/>
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[2]}  services={services} money={money}/>
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[3]}  services={services} money={money}/>
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[4]}  services={services} money={money}/>
          <ProductComponent  onProductionDone={onProductionDone} qtmulti={qtmulti} prod={world.products.product[5]}  services={services} money={money}/>         
            </div>
      </div>
  );
}


export default App;
