import {google} from 'googleapis'
import "./lib/env"
import { v4 as uuidv4 } from 'uuid';
import { Storage } from '@google-cloud/storage'

const getClient = async (scopes?: string[]) => {
  // Getting client
  try {
    let authClient = null;
    if(scopes === []){
      authClient = await google.auth.getClient();
    }else{
      const auth = new google.auth.GoogleAuth({ scopes: scopes });
      authClient = await auth.getClient()
    }
    return authClient;
  } catch (error) {
    console.error(error);
    throw(error);
  }
}

export const startInstance = async () => {
    const compute = google.compute("v1");
    console.log(`Starting instance: ${process.env.PROJECT_ID}/${process.env.ZONE}/${process.env.INSTANCE}`);
    const authClient = await getClient();
    google.options({auth: authClient});
    // Starting instance
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

export const uploadToInstance = async () => {
  // https://cloud.google.com/compute/docs/instances/transfer-files#gcstransfer
}

export const createBucket = async () => {
  const bucketName = "daz3d_"+Date.now();
  const storage = new Storage();
  
  const [bucket] = await storage.createBucket(bucketName, {
    location: 'US-CENTRAL1',
    coldline: true
  });
  
  console.log(`Bucket ${bucket.name} created.`);
  return bucketName;
}

export const uploadFileToBucket = async (bucketName: string, filepath: string) => {
  const storage = new Storage();
  await storage.bucket(bucketName).upload(filepath, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
  });

  console.log(`${filepath} uploaded to ${bucketName}.`);
  return true;
}