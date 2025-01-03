import cassandra from 'cassandra-driver';

const cloud = { secureConnectBundle: './secure-connect-chailytics.zip' };
const authProvider = new cassandra.auth.PlainTextAuthProvider('token', process.env.ASTRA_DB_TOKEN!);
const client = new cassandra.Client({ cloud, authProvider });


let isConnected = false;

const connectToCassandra = async () => {
    if (!isConnected) {
        await client.connect(); // Establish connection once
    isConnected = true;
    console.log('Connected to Cassandra');
  }
};

export { client, connectToCassandra };