import {FtpTransferDownload} from "../FtpTransfer/FtpTransferDownload"
import { FtpTransferUpload } from "../FtpTransfer/FtpTransferUpload"

export let TranslateFilesPeerToPeer = async ()=>{

   let serverToConnect = {
      host:"172.16.6.86",
      user:"christian",
      password:"123456789"

   }
   

   let FilesNumber= await  FtpTransferDownload("C:/Users/christian.alvarez/Desktop/dirAutomata/files_pdf",serverToConnect)

   console.log(FilesNumber)

}

 TranslateFilesPeerToPeer()
 

