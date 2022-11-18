import express from 'express';
import initializeDb, { getLedgers, getLedgerByUser } from './ledger.repository.js';

const router = express.Router();

initializeDb().then(() => console.log('DB has been initialized'));

router.route('/ledger').get((_, res) => {
    res.json(getLedgers());
});

router.route('/ledger/:email').get((req, res) => {
    const { email } = req.params;
    console.log(`ledger api with param ${email}`);
    res.json(getLedgerByUser(email));
});

export default router;