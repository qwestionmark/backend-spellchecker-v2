import mongodb from 'mongodb';

const { DATABASE_URL, DATABASE_NAME} = process.env


const MongoClient = mongodb.MongoClient;

const db = MongoClient.connect(DATABASE_URL, async (err, client) => {
    if (err) throw err;
    console.log("Connected successfully to db server");
   
    const db = await client.db(DATABASE_NAME);
    // console.log('database: ', db)
    console.log('find result', db.listCollections)
    return db
  });

export default db;
