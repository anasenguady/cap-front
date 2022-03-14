import "./App.css"
import {Pallier, Product, World} from "./world"
import {Services} from "./Services"
import ProductComponent from './Product';

type AngelProps = {
    world : World 
    services : Services
    voirAngelUpgrades : Function
    pallier : Pallier
    
}

export default function AngelUpgrades({world, services,voirAngelUpgrades,pallier}: AngelProps){

    function buyAngelUpgrade() : void{
    
    }

   
return(

<div>
    <div className="modal">
        <div> <h1 className="titleangelUpgrades">BUY YOUR angelUpgrades !</h1> </div>

        <div> { world.angelupgrades.pallier.filter(pallierAnge => !pallierAnge.unlocked).map(pallierAnge =>
        <div key={pallier.idcible} className="angelgrid">
        
    <div className="logo">
        <img alt="upgradeslogo" className="round" src= {services.server + pallierAnge.logo} />

    </div>
    <div className="infosupgrade">
         <div className="upgradename"> {pallierAnge.name} </div>
         <div className="upgradecost"> {pallierAnge.seuil} Anges</div>
    </div>
    <div onClick={() => buyAngelUpgrade}>
        <button className="btnangels" disabled={world.money < pallierAnge.seuil}> ACHETER </button>
    </div>
 </div>
)
}
</div>
 </div>
 </div>
    )
}