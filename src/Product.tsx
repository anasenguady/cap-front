import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import ProgressBar from "./ProgressBar";
import { Services } from "./Services";
import { Product, World } from "./world";
import Box from '@mui/material/Box';

   type ProductProps = {
    prod: Product
    onBuy : (cout: number, product:Product) => void,
    onProductionDone: (product: Product) => void,
    services: Services
    qtmulti : string
    money : number
    
        
    }
   



   export default function ProductComponent({ prod,onProductionDone, services,qtmulti, money, onBuy } : ProductProps)
   {
    const [progress, setProgress] = useState(0)
    const [quantite , setQuantite ] = useState(0)
    const savedCallback = useRef(calcScore)
    useEffect(() => savedCallback.current = calcScore)
    let prix = 1
    

    useEffect(() => savedCallback.current = calcScore)
    useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), 100)
    return function cleanup() {
    if (timer) clearInterval(timer)
    }
}, [])

function startFabrication() {
    if (prod.quantite !=0){
    prod.timeleft=prod.vitesse
    prod.lastupdate = Date.now()
   setProgress(prod.progressbarvalue)
 }}
 

function calcScore(){
    if (prod != null){
    if (prod.timeleft == 0){
        setProgress(0)
    }
    else{
        let now = Date.now()
        prod.timeleft = prod.timeleft- (Date.now() - prod.lastupdate)
        prod.lastupdate= now
        

        if(prod.timeleft<=0){
            setProgress(0)
            
            prod.timeleft = 0
            
            onProductionDone(prod)
        }
        else{
            prod.progressbarvalue = ((prod.vitesse - prod.timeleft) / prod.vitesse) * 100
        }
        setProgress(prod.progressbarvalue)
        
    }}
}


    /*function calcMaxCanBuy() {
        const qtmax = (Math.log(1 - (money*(1-prod.croissance))/prod.cout))/Math.log(prod.croissance)
        if (qtmax <= 0){
            prod.quantite = 0
        }else{
            prod.quantite = Math.floor(qtmax)
        }
        return prod.quantite
    }
    */

    function qtmultiChiffre(){
        if (qtmulti === "1"){
            prix = 1
        }else{
            if (qtmulti ==="10"){
                prix = 10
            }else{
                if (qtmulti ==="100"){
                    prix = 100
                }else{
                    if (qtmulti ==="MAX"){
                        prix =Math.floor(Math.log(1 - money * (1 - prod.croissance) / prod.cout) / Math.log(prod.croissance))
                    }

            }
        }
    } return prix
    }
    
    function prixAchatMax(max : number){
        return Math.round(prod.cout * (1 - Math.pow(prod.croissance, max))/ (1 - prod.croissance)*100)/100
    }

    function acheterPtoduit():void{
        prod.quantite = prod.quantite + parseFloat(qtmulti)
        let cout= prixAchatMax(qtmultiChiffre())
        setQuantite(prod.quantite)
        onBuy(cout ,prod)


    }


    
    
if (prod == null){
    return(
        <div></div>
    )
}else{
   return (
    <div className="Produits">
        
        <div className="infoproduits">
            <img onClick={startFabrication} className="round"  src={services.server + prod.logo} alt="logo"/>

          <div className="qte">Quantité: {prod.quantite}</div>
</div>
       
           
        <div className="revenu">Revenu: {prod.revenu}</div>
            <div className="prixStand">
                <button type="button"  onClick={acheterPtoduit} disabled={money < prixAchatMax(qtmultiChiffre())}>Acheter x{qtmultiChiffre()} Prix: {prixAchatMax(qtmultiChiffre())} </button>
            </div>
            <div className="temps">Temps: {prod.vitesse / 1000}s</div>

            <div className="progressBar">
            <Box sx={{width: '50%'}}>
         <ProgressBar transitionDuration={"0.1s"} customLabel={" "} completed={progress}/>
        </Box>
            </div>
    </div>
   );
   }}