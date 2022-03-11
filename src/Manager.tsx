import "./App.css"
import {Pallier, World} from "./world"
import {Services} from "./Services"

type ManagerProps = {
    world : World 
    services : Services
    voirManagers : Function
    
}

export default function Manager({world, services,voirManagers}: ManagerProps){

    function engageManager(manager : Pallier) {
        if(world.money >= manager.seuil){
        world.money -= manager.seuil
        manager.unlocked = true
        world.products.product[manager.idcible-1].managerUnlocked = true
        setTimeout(function() {alert({manager} + "engagé !")}, 3000)
            }
        }


    return (

<div>

    <div className="modal">
        <div> <h1 className="titleManagers">Managers make you feel better !</h1> </div>
        <div> {world.managers.pallier.filter( manager => !manager.unlocked).map(manager =>
        <div key={manager.idcible} className="managergrid">
    <div className="logo">
        <img alt="managerlogo" className="round" src= {services.server + manager.logo} />
    </div>
    <div className="infosmanager">
         <div className="managername"> {manager.name} </div>
         <div className="managercible"> {world.products.product[manager.idcible-1].name} </div>
         <div className="managercost"> { manager.seuil} $</div>
    </div>
    <div onClick={() => engageManager}>
        <button disabled={world.money < manager.seuil}> HIRE ME!</button>
    </div>
 </div>
)
 }

 </div>
</div>

</div>

    )
}