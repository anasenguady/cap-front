import "./App.css"
import {World} from "./world"
import {Services} from "./Services"

type ManagerProps = {
    world : World 
    services : Services
    voirManagers : Function
}

export default function Manager({world, services,voirManagers}: ManagerProps){



    return (

<div>

    <div className="modal">
        <div> <h1 className="titleManagers">Managers make you feel better !</h1> </div>
        <div> {world.managers.pallier.filter( manager => !manager.unlocked).map(manager =>
        <div key={manager.idcible} className="managergrid">
    <div>
    <div className="logo">
        <img alt="managerlogo" className="round" src= {services.server + manager.logo} />
    </div>
    </div> 
    <div className="infosmanager">
         <div className="managername"> {manager.name} </div>
         <div className="managercible"> {world.products.product[manager.idcible-1].name} </div>
         <div className="managercost"> { manager.seuil} </div>
    </div>
    <div /*onClick={() => manager.engageManager(manager)}*/>
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