const getArgs = require('./helpers/args')
const startCli =()=>{
    const args = getArgs(process.argv)
    if(args.h){
        //help
    } 

    if(args.s){
        //save city
    }

    if(args.t){
        //save token
    }
    //result

}
startCli()