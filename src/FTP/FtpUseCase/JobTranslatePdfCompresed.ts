import {exec} from "child_process"
import path from "path"
import {FtpTransferDownload} from "../FtpTransfer/FtpTransferDownload"
import { FtpTransferUpload } from "../FtpTransfer/FtpTransferUpload"



export const JobTranslatePdfCompresed = async ()=>{
    let pathResolve=  path.join(path.resolve())

    let serverToConnect_source = {
        host:"172.16.6.86",
        user:"christian",
        password:"123456789"
  
     }
  
    let numberFile= await  FtpTransferDownload("C:/Users/christian.alvarez/Desktop/dirAutomata",serverToConnect_source)

  console.log("Comprimiendo PDF's...")
  exec(`cd ${pathResolve} & python script.py`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("Compression finalizada")
        console.log("Subiendo directorio..")
        let serverToConnect_dest = {
            host:"192.168.2.61",
            user:"christian",
            password:"123456789"
      
         }
          FtpTransferUpload("C:/Users/christian.alvarez/Desktop/dirAutomata",serverToConnect_dest)

        //console.log(stdout)      
    });

    return  new Promise((resolve,reject)=>{resolve(numberFile)}) 
}

JobTranslatePdfCompresed().then(data=>console.log("terminado"))