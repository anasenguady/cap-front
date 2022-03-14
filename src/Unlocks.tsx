import React, { useEffect, useState } from 'react';
import './App.css';
import { Services } from "./Services";
import { Pallier, World,Product } from './world';
import { transform } from "./utils";

    type UnlocksProps ={
        world: World
       
        services:Services
        voirUnlocks : Function
    }
    
    export default function Unlocks({world,  services, voirUnlocks}: UnlocksProps){

    return (
<div className="modal">
    <div> <h1 className="titleManagers">Unlocks</h1> </div>
    <div> {world.allunlocks.pallier.filter( Unlocks => !Unlocks.unlocked).map(manager =>
    <div key={manager.idcible} className="managergrid">
<div className="logo">
    <img alt="unlockslogo" className="round" src= {services.server + manager.logo} />
</div>
<div className="infosmanager">
     <div className="managername"> </div>
     <div className="managercible"> </div>
     <div className="managercost"> { manager.seuil} </div>
</div>
</div>
    )
}

</div>

</div>


)
}