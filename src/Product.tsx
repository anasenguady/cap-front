import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import ProgressBar from "./ProgressBar";
import { Services } from "./Services";
import { Product, World } from "./world";

   type ProductProps = {
    prod: Product
    onProductionDone: (product: Product) => void,
    services: Services
    qtmulti : string
    money : number
   }



   export default function ProductComponent({ prod,onProductionDone, services,qtmulti, money } : ProductProps)
   {
    const [progress, setProgress] = useState(0)
    const savedCallback = useRef(calcScore)
   
    

    useEffect(() => savedCallback.current = calcScore)
    useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), 100)
    return function cleanup() {
    if (timer) clearInterval(timer)
    }
}, [])

function startFabrication(){
    if (prod.quantite>0) {
        prod.timeleft = prod.vitesse
        prod.lastupdate = Date.now()
    }
    calcMaxCanBuy();

}

function calcScore(){
    if (prod.timeleft == 0){
        setProgress(0)
    }
    else{
        prod.lastupdate = Date.now()
        prod.timeleft = prod.timeleft- (Date.now() - prod.lastupdate)

        if(prod.timeleft<=0){
            prod.timeleft = 0
            prod.progressbarvalue = 0
            onProductionDone(prod)
        }
        else{
            prod.progressbarvalue = ((prod.vitesse - prod.timeleft) / prod.vitesse) * 100
        }
        setProgress(prod.progressbarvalue)
    }
}


    function calcMaxCanBuy(): void {
        const qtmax = (Math.log(1 - (money*(1-prod.croissance))/prod.cout))/Math.log(prod.croissance)
        if (qtmax <= 0){
            prod.quantite = 0
        }else{
            prod.quantite = Math.floor(qtmax)
        }
        
    }

    

   return (
    <div>  
            <div className="produit1"> 
            <div className="lesdeux">
            <div className="lepremier">
            <img className="round" src={services.server + prod.logo} style={{width: '120px', borderRadius:'50%',transform: 'translate(+10%)'}}/>
            </div>
            <div className="lesecond">0</div>
            </div>
            <br></br>
            <div className="progress"> 
            <div className="progress__bar"></div>
            </div>
            <p id='fabrication' onClick = { () => startFabrication()} > PRODUIRE {prod.name} POUR {prod.cout} CREDIT(S) ECTS</p>
            </div>
        </div>
   );
   }