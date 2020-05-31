import {google} from 'googleapis'
import "./lib/env"
import { v4 as uuidv4 } from 'uuid';

const startInstance = async () => {
    const compute = google.compute("v1");
    console.log(`Starting instance: ${process.env.PROJECT_ID}/${process.env.ZONE}/${process.env.INSTANCE}`)
    try {
      const authClient = await google.auth.getClient();
      google.options({auth: authClient});
    } catch (error) {
      console.error(error);
      throw(error);
    }
    try {
      const requestId = uuidv4();
      const res = await compute.instances.start({
        project: process.env.PROJECT_ID,  
        zone: process.env.ZONE,
        instance: process.env.INSTANCE,
        requestId: requestId
      });
      console.log(`Progress: ${res.data.progress}/100\nStatus message: ${res.data.statusMessage}`);
      return res.data.status;
    } catch (error) {
      console.error(error);
      throw(error);
    }
}

export default startInstance