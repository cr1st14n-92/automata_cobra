import {CronJob} from "cron"
import {JobTranslatePdfCompresed} from "./FTP/FtpUseCase/JobTranslatePdfCompresed"

export  class AutomataFTP{
	private job:CronJob

	constructor(minutes:number){
         this.job= new CronJob(`*/${minutes} * * * * *`, async function() {
						//const d = new Date();
				 // await JobTranslatePdfCompresed()
				 
				 console.log("ejecutando...")
				 console.log("   ")
					})
	}

	start(){
		this.job.start()
	}

	stop(){
		this.job.stop()
	}
}


