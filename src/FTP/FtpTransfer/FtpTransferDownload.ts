import {FtpConexionServer} from "../FtpConexionServer/FtpConexionServer"
import{Client} from "basic-ftp"

export let FtpTransferDownload=async (local_dir:string,serverToConnect:{host:string,
                                                                        user:string,
                                                                        password:string}): Promise<number>=>{
    
    try{

     let client:Client= await FtpConexionServer(serverToConnect.host,
                                               serverToConnect.user,
                                               serverToConnect.password,
                                               false)

    // let directory= await  client.list()
     await  client.downloadToDir(`${local_dir}`)

      client.close()

      return new Promise((resolve,reject)=>resolve(0))

    }catch(err){

        console.log(err)
        return new Promise((resolve,reject)=>resolve(0))

    }
  

}