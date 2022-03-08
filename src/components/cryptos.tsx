import React from "react"


function MyCryptos(){
    return(

        <div className="main">
            <div className="container1"> 
                <button className="icon" > aa </button>
                <button className="btnunlocks"> Unlocks</button>
                <button className="btncashupgrades"> Cash Upgrades</button>
                <button className="btnangelupgrades"> Angel Upgrades</button>
                <button className="btnManagers"> Managers</button>
                <button className="btninvestors"> Investors</button>
         </div>           
            <div className="product">
                <div className="container2">
                    <div className="bydoge">
                        <img src="./image/dogepic.png" alt="dogeimage" height={100} width={100} />
                        <button className="byonedoge" > BUY x1</button>
                        
                    </div>
                    <div className="byxrp">
                        <img src="./image/xrppic.png" alt="xrpimage" height={100} width={100}/> 
                        <button className="byonexrp"  > BUY x1</button>
                        
                    </div>
                    <div className="bysolana">
                        <img src="./image/solanapic.png" alt="solanaimage" height={100} width={100}/>
                        <button className="byonesolana"  > BUY x1</button>
                        
                        
                    </div> 
                </div>
                <div className="container3">
                    <div className="bybnb">
                        <img src="./image/bnbpic.png" alt="bnbimage" height={100} width={100}/>
                        <button className="byonebnb"  > BUY x1</button>
                       
                    </div>
                    <div className="byethereum">
                        <img src="./image/ethereumpic.jpeg" alt="ethereumimage" height={100} width={100} /> 
                        <button className="byoneethereum"  > BUY x1</button>
                        
                    </div>
                    <div className="bybitcoin">
                        <img src="./image/bitcoinpic.jpg" alt="bitcoinimage" height={100} width={100} />
                        <button className="byonebitcoin"  > BUY x1</button>
                        
                    </div>
                
                </div>
            </div>
        </div>



    )
}

export default MyCryptos 