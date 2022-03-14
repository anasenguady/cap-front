import React, { useDebugValue, useEffect, useState } from 'react';
import './App.css';
import { Pallier, Product, World } from './world';
import { Services } from './Services';
import {transform} from "./utils";
import ProductComponent from './Product';
import Manager from './Manager';
import Angels from './Angels';
import Upgrades from './cashUpgrades';
import AngelUpgrades from './angelUpgrades';
import Unlocks from './Unlocks';


function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  let [qtmulti , setQtmulti]= useState("1")
  const [affManager,setManagers] = useState(false)
  const [affAngels,setAngels] = useState(false)
  const [affUpgrades,setUpgrades] = useState(false)
  const [pallier, setPallier]= useState(new Pallier())
  const [affangelUpgrades,setAngelUpgrades] = useState(false)
  const [username, setUsername] = useState("")
  const [affUnlocks, setAffUnlocks] = useState(false)

  

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
  function zero(){
     if (world.money < 0 ){
       
       world.money = 0
     }else{
       
     }
   }
   

   function voirManagers(){
    if (affManager ==false){
      setManagers(true)
      setAngels(false)
      setUpgrades(false)
      setAngelUpgrades(false)
      setAffUnlocks(false)
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
      setAngelUpgrades(false)
      setAffUnlocks(false)
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
      setAngelUpgrades(false)
      setAffUnlocks(false)
    }
    else {
      setUpgrades(false)
    }
  } 
  function voirUnlocks(){
    if (affUnlocks == false){
      setAffUnlocks(true)
      setUpgrades(false)
      setManagers(false)
      setAngels(false)
      setAngelUpgrades(false)
    }else{
      setAffUnlocks(false)
    }
  }
  function voirAngelUpgrades(){
    if (affangelUpgrades ==false){
      setAngelUpgrades(true)
      setUpgrades(false)
      setManagers(false)
      setAngels(false)
      setAffUnlocks(false)
    }
    else {
      setAngelUpgrades(false)
    }
  } 

 /*   function addToScore(gain: number): void{
      world.score += gain
  }
  */
  function addToScore(gain : number) : void{
    setWorld(world=>({ ...world, money: world.money + gain , score: world.score+gain}))

  }
  /*function updateMoney(gain:number){
     //Met à jour l'argent du joueur de manière positive (revenu gain positif) ou négative (achat gain négatif)
    setWorld(world => ({...world, money:world.money + gain}))
}*/


  
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
    }
    function manageravailablity(): void {

    }
    function onBuy(cout : number , prod : Product):void{
      addToScore(-cout)
      services.putProduct(prod) 

    }



    

  return (
  <div>
   <div className="bgimg">
 
      <div className="header">
        <div> <img id="logoMonde" src={services.server + world.logo} alt={"logo.png"}/><span id="worldName"> {world.name} </span></div>
        <div className="money"><span dangerouslySetInnerHTML={{__html: transform(world.money)}} {...zero()} ></span>$</div>
        <div className="multi"> Multiplicateur :<button onClick={cycleMulti}> {qtmulti} </button>
      </div>
      <div className ="id"> <div> Username <input type="text" id="usernameInput" value={username} /></div> </div>
      
    </div>

    <div className="main">
      <div className="container1"> 
        <button className="btncote" onClick={voirUnlocks}> Unlocks</button>
        <button className="btncote" onClick={voirUpgrades}> Cash Upgrades</button>
        <button className="btncote" onClick={voirAngelUpgrades}> Angel Upgrades</button>
        <button className="btncote" onClick={voirManagers}> Managers</button>
        <button className="btncote" onClick={voirInvestors}> Investors</button>
      </div>   
      <div className="products">
        <div className="a"><ProductComponent prod={ world.products.product[0] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/> </div>
        <div className="a"><ProductComponent prod={ world.products.product[3] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/></div>
        <div className="a"><ProductComponent prod={ world.products.product[1] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/></div>       
        <div className="a"><ProductComponent prod={ world.products.product[4] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/></div>
        <div className="a"><ProductComponent prod={ world.products.product[2] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/></div>
        <div className="a"><ProductComponent prod={ world.products.product[5] } onProductionDone={onProductionDone} qtmulti={qtmulti} money={world.money} services={ services }onBuy={onBuy}/></div>
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
    }
    { affangelUpgrades && <div className='btnangelUpgrades'>
    <AngelUpgrades world={world} services={ services } voirAngelUpgrades={voirAngelUpgrades} pallier={pallier}/></div>
    }

{ affUnlocks && <div className='btnUnlocks'>
<Unlocks world={world} services={ services }  voirUnlocks={voirUnlocks}/></div>
}
    </div>
    </div>
    </div>
  );
}
export default App;
