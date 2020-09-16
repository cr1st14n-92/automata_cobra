import Express,{Application,Request,Response} from "express"
import fs from "fs"
import path from "path"

const app:Application = Express()

app.use(Express.json())

app.get("/consumer",(req:Request,res:Response)=>{

    const jsonStorage = path.join(path.resolve(),path.dirname("/dist/storage/data.json"),"data.json")
     
     let content= fs.readFileSync(jsonStorage);
     let datajson=JSON.parse(content.toString())

     console.log(datajson)

    res.json({ok:true})
})

app.listen("3000",()=>console.log("servidor corriendo en puerto 3000"))
