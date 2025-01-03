import { createServer } from "http";
import { parse } from "url";
import next from "next";
import cassandra from 'cassandra-driver';

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);
  
  
  const cloud = { secureConnectBundle: './secure-connect-chailytics.zip' };
  const authProvider = new cassandra.auth.PlainTextAuthProvider('token', process.env.ASTRA_DB_TOKEN);
  const client = new cassandra.Client({ cloud, authProvider });
  
  
  let isConnected = false;
  
  const connectToCassandra = async () => {
      if (!isConnected) {
          await client.connect(); // Establish connection once
      isConnected = true;
      console.log('Connected to Cassandra');
    }
  };
  
  connectToCassandra();

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
});