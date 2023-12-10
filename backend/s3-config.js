const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

// Function to upload file to S3
const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype, // Set the correct content type
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    return data; // Return data will include the URL of the uploaded object if successful
  } catch (err) {
    console.error("Error occurred:", err);
    throw new Error(
      "There was an error uploading your file: " +
        (err.message || "Unknown error")
    );
  }
};

module.exports = uploadToS3;
