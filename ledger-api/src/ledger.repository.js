import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { JSONFile, Low } from 'lowdb';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dbFile = join(__dirname, 'db.json');

const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

const initializeDb = async () => {
    try{

        await db.read();

        console.log(`initializing db from ${dbFile}`);

        db.data = db.data || { ledgers: [] };

        console.log(`database has been initialized with ${ db?.data?.ledgers?.length } number of records`);

    } catch(e) {
        console.error('failed to read', e)
    }
}

export const initializeDbWith = () => {

    db.read().then(() => {
        console.log(`initializing db from ${dbFile}`);

        db.data = db.data || { ledgers: [] };

        console.log(`database has been initialized with ${ db?.data?.ledgers?.length } number of records`);
    }).catch((e) => {
        console.error('failed to read', e)
    })

}


//get ledgers
//get user email path var
export const getLedgers = () => {
    return db.data?.ledgers || [];
}

export const getLedgerByUser = (email) => {
    const data = db.data?.ledgers.find((data) => data.ledger.user === email);
    return data.ledger || {};
}

export default initializeDb;


