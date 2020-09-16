import {FtpConexionServer} from "../FtpConexionServer/FtpConexionServer"
import{Client} from "basic-ftp"
import fs from "fs"
import path from "path"

export let FtpTransferUpload=async (local_dir:string,serverToConnect:{host:string,
                                                                    user:string,
                                                                    password:string}): Promise<void>=>{
    
    try{

     let client:Client= await FtpConexionServer(serverToConnect.host,
                                                    serverToConnect.user,
                                                    serverToConnect.password,
                                                    false)

     //await  client.downloadToDir("C:/Users/christian.alvarez/Desktop/dirAutomata","FILES/origenAutomata")
     await  client.uploadFromDir(local_dir)
     client.close()

     let directory:string = local_dir;

     let rmdir = function(dir:string) {
      var list = fs.readdirSync(dir);
      for(var i = 0; i < list.length; i++) {
          var filename = path.join(dir, list[i]);
          var stat = fs.statSync(filename);
  
          if(filename == "." || filename == "..") {
              // pass these files
          } else if(stat.isDirectory()) {
              // rmdir recursively
              rmdir(filename);
          } else {
              // rm fiilename
              fs.unlinkSync(filename);
          }
      }
      fs.rmdirSync(dir);
  };

  rmdir(directory)
  

     

    }catch(err){

        console.log(err)

    }
  

}