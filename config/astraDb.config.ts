import { DataAPIClient } from "@datastax/astra-db-ts";

const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN!);
const db = client.db(process.env.ASTRA_DB_URI!)


db.info()
    .then(res => {
        console.log(`Database ${res.name} is now succesfully connected!! `)
    })
    .catch(err => {
        console.error("::::::::::: Database Error :::::::::::\n", err)
        process.exit(1)
    })

export default db;