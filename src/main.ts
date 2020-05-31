import sleep from './utils/time'
import { startInstance } from './compute'

// 1. start GCP instance with UUID to keep trace of status
// https://cloud.google.com/compute/docs/reference/rest/v1/instances/start#examples

(async () => {
  let status = "PENDING";
  // 1.1. wait for instance online
  while(status != "DONE"){
    status = await startInstance();
    if(status == "DONE"){ break; }
    console.log(`Waiting 5000ms`);
    await sleep(5000);
  }
  console.log(`Current status: ${status}`);
})()

// 2. export current scenes
// 2.1. Zip scenes
// 2.3. Upload them to Drive
// ! Promise.wait for 1 & 2

// 1. Password Gen 
// https://cloud.google.com/compute/docs/instances/windows/automate-pw-generation#python
// 1.1. Start RDP
// https://gist.github.com/jdforsythe/48a022ee22c8ec912b7e