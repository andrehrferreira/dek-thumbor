import { $ } from "@dekproject/scope";
import Thumbor from 'thumbor';

export default () => {
    try{
        let dbConfig = {};
        let env = process.env;
        let configApproved = true;

        if(env.hasOwnProperty("THUMBOR_KEY") && !!env.THUMBOR_KEY)
            dbConfig["THUMBOR_KEY"] = env.THUMBOR_KEY;
        else {
            configApproved = false;
            console.log("[ Thumbor ] - There is no THUMBOR_KEY variable in the .env file.");
        }

        if(env.hasOwnProperty("THUMBOR_URL") && !!env.THUMBOR_URL)
            dbConfig["THUMBOR_URL"] = env.THUMBOR_URL;
        else {
            configApproved = false;
            console.log("[ Thumbor ] - There is no THUMBOR_URL variable in the .env file.");
        }

        if(!configApproved){
            console.log("[ Thumbor ] - Please correct the above errors before restarting the application.");
            process.exit(-1);
        }
        else {
            $.set("thumbor", new Thumbor(env.THUMBOR_KEY, env.THUMBOR_URL));
        }
    }
    catch (e) {
        console.log(`[ Elasticsearch ] - ${e.message}`, e);
    }
}
