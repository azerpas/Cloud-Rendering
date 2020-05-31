# DAZ3D Cloud Rendering

1. If not already done, enable the Compute Engine API
   and check the quota for your project at
   https://console.developers.google.com/apis/api/compute
2. This sample uses Application Default Credentials for authentication.
   If not already done, install the gcloud CLI from
   https://cloud.google.com/sdk and run    
   `gcloud auth login`.    
   For more information, see
   https://developers.google.com/identity/protocols/application-default-credentials
3. Install the required packages    
   `npm install`    
   or     
   `yarn install`
4. `cp .env.example .env`    
5. Fill the `.env` with your Compute Engine Instance informations


## TODO
**Main machine**     
- [x] Start Instance with GCP API    
- [ ] Export scenes to GDrive     
- [ ] Open RDP connection    
**GCP Instance**    
- [ ] HOWTO create basic planned task (on User connection) on Windows Instance     
- [ ] Create script to render
- [ ] Upload renders to GDrive    
**Main machine**     
- [ ] Fetch renders from GDrive
- [ ] Close RDP connection
- [ ] Turn off the Instance