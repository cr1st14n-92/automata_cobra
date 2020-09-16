import {exec} from "child_process"
import path from "path"


export const CmdCompressPdf =  ()=>{
    let pathResolve=  path.join(path.resolve("../dirAutomata_2"))

    console.log(pathResolve)

  exec(`conda activate & cd ${pathResolve} & python script.py`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        console.log(stdout)      
    });
    

}


CmdCompressPdf()

console.log("hola a todo el mundo")
