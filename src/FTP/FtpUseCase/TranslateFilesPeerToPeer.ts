import {FtpTransferDownload} from "../FtpTransfer/FtpTransferDownload"
import { FtpTransferUpload } from "../FtpTransfer/FtpTransferUpload"

export let TranslateFilesPeerToPeer = async ()=>{

   let serverToConnect_source = {
      host:"localhost",
      user:"cristian",
      password:"123456789"

   }
   

    await  FtpTransferDownload("C:/Users/christian.alvarez/Desktop/dirAutomata/files_pdf",serverToConnect_source)
    let serverToConnect_dest = {
      /* host:"192.168.2.61",
      user:"christian",
      password:"123456789" */
      host:"localhost",
      user:"cristian2",
      password:"123456789"
   }

   await  FtpTransferUpload("C:/Users/christian.alvarez/Desktop/dirAutomata",serverToConnect_dest)

}

 

