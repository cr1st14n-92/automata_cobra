import {AutomataFTP} from "./AutomataFTP"


let Automata= new AutomataFTP(1);

Automata.start();

setTimeout(()=>{
    Automata.stop()
},180000)