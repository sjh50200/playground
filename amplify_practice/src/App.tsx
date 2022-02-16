import React, { useState } from "react";
import ReactS3Client from "react-aws-s3-typescript";
import { s3Config } from "./s3Config";

// const S3_BUCKET = "sgsncns130837-dev";
// const REGION = "ap-northeast-2";
// const ACCESS_KEY = "AKIAWNXXBJIECL5IGNTZ";
// const SECRET_ACCESS_KEY = "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";

// const config = {
//   bucketName: S3_BUCKET,
//   region: REGION,
//   accessKeyId: ACCESS_KEY,
//   secretAccessKey: SECRET_ACCESS_KEY,
// };

function App() {
  const listFiles = async () => {
    /* Import s3 config object and call the constrcutor */
    const s3 = new ReactS3Client(s3Config);

    try {
      const fileList = await s3.listFiles();

      console.log(fileList);
      /*
       * {
       *   Response: {
       *     message: "Objects listed succesfully",
       *     data: {                   // List of Objects
       *       ...                     // Meta data
       *       Contents: []            // Array of objects in the bucket
       *     }
       *   }
       * }
       */
    } catch (exception) {
      console.log(exception);
      /* handle the exception */
    }
  };

  listFiles();

  // const getFiles = () => {
  //   listFiles((Imgs: Array) => {
  //     setSelectedFile(Imgs);
  //   });
  // };

  return <div>heoo</div>;
}

export default App;
