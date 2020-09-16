import {CronJob} from "cron"
import {JobTranslatePdfCompresed} from "./FTP/FtpUseCase/JobTranslatePdfCompresed"

export  class AutomataFTP{
	private job:CronJob

	constructor(minutes:number){
         this.job= new CronJob(`0 */${minutes} * * * *`, async function() {
						//const d = new Date();
		let numberFile= await JobTranslatePdfCompresed()
					})
	}

	start(){
		this.job.start()
	}

	stop(){
		this.job.stop()
	}
}

async function ejecutar(){
	while(true){
		let numberFile= await JobTranslatePdfCompresed()
		  
		if(numberFile==0){
			break;
		}
	
	}


}
 ejecutar()
