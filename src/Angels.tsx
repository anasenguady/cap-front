import "./App.css"
import Services from "./Services"
import { World } from "./world"

type AngelsProps = {
    world : World 
    services : Services  
    voirInvestors : Function  
}

export default function Angels({world, services, voirInvestors}: AngelsProps){

    const availableAngels = Math.floor(150 * Math.sqrt(world.score/Math.pow(10,15)) - world.totalangels)

return (<div>

    <div className="modal">
        <h1>Angels investors</h1>
        <div>Vous avez {world.activeangels} anges </div>
    <div className="infosangel">
    </div>
    <div /*onClick={() => {buyAngel}*/>
        <button disabled={world.money < world.totalangels}> Achetez {availableAngels} anges en vendant toutes vos cryptomonnaies</button>
    </div>
 </div>
 </div>)}