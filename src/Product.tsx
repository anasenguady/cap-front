import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import { Services } from "./service";
import { Product } from "./world";

   type ProductProps = {
    prod: Product
    onProductionDone: (product: Product) => void,
    services: Services
   }


   
   export default function ProductComponent({ prod,onProductionDone, services } : ProductProps)
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
        console.log("Icone cliquée")
        console.log(prod.name)
        prod.timeleft = prod.vitesse
        prod.lastupdate = Date.now()
    }
}

function calcScore(){
    if (prod.timeleft == 0){
        setProgress(0)
    }
    else{
        let time_since_last_update = Date.now() - prod.lastupdate
        prod.lastupdate = Date.now()
        prod.timeleft -= time_since_last_update

        if(prod.timeleft<=0){
            prod.timeleft = 0
            console.log(prod.name + " a été créé")
            let revenu = prod.revenu
            prod.progressbarvalue = 0
            onProductionDone(prod)
        }
        else{
            prod.progressbarvalue = ((prod.vitesse - prod.timeleft) / prod.vitesse) * 100
        }
        setProgress(prod.progressbarvalue)
    }
}

   return (
    <div >
        <img className="logoProd"  onClick={startFabrication} src={services.server + prod.logo} alt={prod.logo}/>
        <div className="quantite">Quantité : {prod.quantite}</div>
        <ProgressBar transitionDuration={"0.1s"} customLabel={" "} completed={progress}/>
    </div>
   );
   }