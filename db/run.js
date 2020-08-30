import mongodb from 'mongodb';

const { DATABASE_URL, DATABASE_NAME} = process.env


const MongoClient = mongodb.MongoClient;

// Returns Promise to db connection object or errors out
const db = MongoClient.connect(DATABASE_URL, async (err, client) => {
    if (err) throw err;
    console.log("Connected successfully to db server");

    const db =  await client.db(DATABASE_NAME);
    // SUCCESSFUL TEST OF DB CONNECTION
    console.log('db collection', await db.collection('spells').findOne({ name: 'Fireball'}))
    return db
  });

export default db;
