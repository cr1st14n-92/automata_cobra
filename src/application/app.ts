import Express,{Application,Request,Response} from "express"
import {AutomataFTP} from "../AutomataFTP"
import cors from "cors"

let Automata= new AutomataFTP(5);

const app:Application = Express()

app.use(Express.json())

app.use(cors())

app.get("/encender",(req:Request,res:Response)=>{

    Automata.start();
    console.log("             ")
    console.log("automata encendido!!!!")
    console.log("             ")

    res.json({mensaje:"encendido"})
})

app.get("/apagar",(req:Request,res:Response)=>{
 
        Automata.stop()
        console.log("             ")
        console.log("automata apagado!!")
    res.json({
        mensaje:"apagado"
    })
})

app.listen("3000",()=>console.log("servidor corriendo en puerto 3000"))
