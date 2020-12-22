import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Increment} from "./Increment";
import {Reset} from "./Reset";
import {DisplayNew} from "./countNew/DisplayNew";


export function App() {

    let [count, setCount] = useState(0)
    let min = 0
    let max = 5
    let disabledIncCount = count === max
    let disabledResCount = count === min

    let IncrementCount = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    let ResetCount = () => {
        setCount(min)
    }


    return (
        <div className="App">
            <div className="AppCounter">
                <Display count={count}/>
                <div className="ButtonsBorder">
                    <Increment title={"Inc"} IncrCount={IncrementCount} disabledInc={disabledIncCount}/>
                    <Reset title={"Res"} ResCount={ResetCount} disabledRes={disabledResCount}/>
                </div>
            </div>

            <div className="AppCounterNew">
                <DisplayNew titleMax={"Max value:"} titleMin={"Start value:"} />
                <div className="ButtonsBorderNew">

                </div>
                <div>

                </div>
            </div>
        </div>
    )

    /* return (
         <div className="AppNew" >
             <DisplayNew />
             <div >

             </div>
         </div>
     )*/
}


export default App;
