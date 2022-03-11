import React, { useDebugValue, useEffect, useState } from 'react';
import './App.css';
import { Pallier, Product, World } from './world';
import { Services } from './Services';
import {transform} from "./utils";
import ProductComponent from './Product';
import Manager from './Manager';
import Angels from './Angels';
import Upgrades from './cashUpgrades';


function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  let [qtmulti , setQtmulti]= useState("1")
  const [affManager,setManagers] = useState(false)
  const [affAngels,setAngels] = useState(false)
  const [affUpgrades,setUpgrades] = useState(false)
  const [pallier, setPallier]= useState(new Pallier())

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
      setAngels(false)
      setUpgrades(false)
    }
    else {
      setManagers(false)
    }
  } 

  function voirInvestors(){
    if (affAngels==false){
      setAngels(true)
      setManagers(false)
      setUpgrades(false)
    }
    else {
      setAngels(false)
    }
  } 

  function voirUpgrades(){
    if (affUpgrades ==false){
      setUpgrades(true)
      setManagers(false)
      setAngels(false)
    }
    else {
      setUpgrades(false)
    }
  } 

    function addToScore(gain: number): void{
      world.score += gain
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
    function addToScore(value : number) : void{
      setWorld(world=>({ ...world, money: world.money + value , score: world.score+value}))

    }}
    function manageravailablity(): void {

    }

  return (
  <div>
      <div className="header">
        <div> <img id="logoMonde" src={services.server + world.logo} alt={"logo.png"}/><span id="worldName"> {world.name} </span></div>
        <div><span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>$</div>
        <div> Multiplicateur :<button onClick={cycleMulti}> {qtmulti} </button>
      </div>
      <div> ID du joueur </div>
      
    </div>

    <div className="main">
      <div className="container1"> 
        <button className="btncote"> Unlocks</button>
        <button className="btncote" onClick={voirUpgrades}> Cash Upgrades</button>
        <button className="btncote"> Angel Upgrades</button>
        <button className="btncote" onClick={voirManagers}> Managers</button>
        <button className="btncote" onClick={voirInvestors}> Investors</button>
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
      <Manager world={world} services={ services } voirManagers={voirManagers}/>
    </div>
    
    }
    { affAngels && <div className='btnInvestors'>
    <Angels world={world} services={ services } voirInvestors={voirInvestors}/></div>
    }
    { affUpgrades && <div className='btnUpgrades'>
    <Upgrades world={world} services={ services } voirUpgrades={voirUpgrades} pallier={pallier}/></div>
    }</div>
    </div>
  );
}
export default App;
