import {Client} from "basic-ftp"

export let FtpConexionServer= async (host:string,user:string,password:string,secure:boolean): Promise<Client>=>{

    const client= new Client(300000)
    client.ftp.verbose=true

    console.log(host,user,password,secure)

    try{
        await client.access({host,user,password,secure})
        return client

    }catch(err){
        return client

    }
}


