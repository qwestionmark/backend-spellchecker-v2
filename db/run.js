import mongodb from 'mongodb';

// Destructure & assign DB env connection options
const { DATABASE_URL, DATABASE_NAME} = process.env

const DB_CONNECTION_OPTIONS = { 
  useUnifiedTopology: true,
}


const client = mongodb.MongoClient(DATABASE_URL, DB_CONNECTION_OPTIONS);

// Returns Promise to DB connection object or closes connection on error
async function connectDB() {
  try {
    await client.connect();

    console.log("Connected successfully to database server");
    return await client.db(DATABASE_NAME);
  } catch {
    await client.close();
    console.error('Unable to establish connection with database')
    process.exit(1)
  }
};

export default connectDB;
