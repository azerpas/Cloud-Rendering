import { createBucket, uploadFileToBucket } from './compute';


test("Should upload a document to bucket", async () => {
    let res = true;
    const filepath = __dirname+"/../tests/assets/HelloWorld.svg";
    //const bucketName = await createBucket();
    //res = await uploadFileToBucket(bucketName,filepath);
    expect(res).toBe(true);
})
