import mongodb from 'mongodb';

// Destructure & assign DB env connection options
const { DATABASE_URL, DATABASE_NAME} = process.env

const DB_CONNECTION_OPTIONS = { 
  useUnifiedTopology: true,
}


const MongoClient = mongodb.MongoClient;

// Returns Promise to DB connection object or errors out
const connectDB = async () => {
  return MongoClient.connect(DATABASE_URL, DB_CONNECTION_OPTIONS, 
    async (err, client) => {
      if (err) throw err;

      // Attempt to access DB
      const db = client.db(DATABASE_NAME);

      const testDoc = await db.collection('spells').findOne({ name: 'Fireball'})
      if (testDoc.name !== 'Fireball') console.warn(
        'DB connection established, but unable to locate spell "Fireball"'
        )

      console.log("Connected successfully to database server");
      return db
    }
  );
}

export default connectDB;
