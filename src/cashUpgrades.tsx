import "./App.css"
import {Pallier, Product, World} from "./world"
import {Services} from "./Services"
import ProductComponent from './Product';

type UpgradeProps = {
    world : World 
    services : Services
    voirUpgrades : Function
    pallier : Pallier
    
}

export default function Upgrades({world, services,voirUpgrades,pallier}: UpgradeProps){

    function buyUpgrade() : void{
    
    }

   
return(

<div>
    <div className="modal">
        <div> <h1 className="titleUpgrades">Faites des Upgrades !</h1> </div>

        <div> { world.upgrades.pallier.filter(pallier => !pallier.unlocked).map(pallier =>
        <div key={pallier.idcible} className="managergrid">
        
    <div className="logo">
        <img alt="upgradeslogo" className="round" src= {services.server + pallier.logo}/>

    </div>
    <div className="infosupgrade">
         <div className="upgradename"> {pallier.name} </div>
         <div className="upgradecost"> { pallier.seuil} $</div>
    </div>
    <div onClick={() => buyUpgrade}>
        <button disabled={world.money < pallier.seuil}> ACHETER </button>
    </div>
 </div>
)
}
</div>
 </div>
 </div>
    )
}