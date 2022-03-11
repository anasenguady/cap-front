import React, { useEffect, useState } from 'react';
import './App.css';
import { Product, World } from './world';
import { Services } from './Services';
import {transform} from "./utils";
import ProductComponent from './Product';
import Manager from './Manager';


function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  let [qtmulti , setQtmulti]= useState("1")
  const [money,setMoney] = useState(world.money)
  const [affManager,setManagers] = useState(false)

  useEffect(() => {

    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    console.log(response);
    }
    )
   }, [])

   

   function onProductionDone(p: Product): void {
    // calcul de la somme obtenue par la production du produit
    let gain = p.revenu
    // ajout de la somme à l’argent possédé
    addToScore(gain)
   }

   function voirManagers(){
    if (affManager ==false){
      setManagers(true)
    }
    else {
      setManagers(false)
    }
  } 

    function addToScore(gain: number): void{
      world.score += gain
  }

  function getMoney(){
    return world.money
  }
  
  function cycleMulti() {
    if (qtmulti == "1"){
      setQtmulti("10")
    }else 
    if (qtmulti == "10"){
        setQtmulti("100")
      }else
        if (qtmulti == "100"){
        setQtmulti("MAX")
      }else 
      if (qtmulti == "MAX"){
        setQtmulti("1")
    }
    
    /*function engageManager(){
      if(world.money >= world.managers.pallier){



      }
    }
    */
    
 }

  return (
  <div>
      <div className="header">
        <div> <img id="logoMonde" src={services.server + world.logo} alt={"logo.png"}/><span id="worldName"> {world.name} </span></div>
        <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
        <div> Multiplicateur :<button onClick={cycleMulti}> {qtmulti} </button>
      </div>
      <div> ID du joueur </div>
      
    </div>

    <div className="main">
      <div className="container1"> 
        <button className="btncote"> Unlocks</button>
        <button className="btncote"> Cash Upgrades</button>
        <button className="btncote"> Angel Upgrades</button>
        <button className="btncote" onClick={voirManagers}> Managers</button>
        <button className="btncote"> Investors</button>
      </div>   
      <div className="products">
        <div><ProductComponent prod={ world.products.product[0] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/> </div>
        <div><ProductComponent prod={ world.products.product[3] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/></div>
        <div><ProductComponent prod={ world.products.product[1] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/></div>       
        <div><ProductComponent prod={ world.products.product[4] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/></div>
        <div><ProductComponent prod={ world.products.product[2] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/></div>
        <div><ProductComponent prod={ world.products.product[5] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }/></div>
      </div>
      { affManager && <div className='btnManagers'>
      <Manager world={world} services={ services } voirManagers={voirManagers} />
    </div>
    }
    </div>
  </div>
  );
}
export default App;
