import express from 'express';
import router from './ledger.router.js';

const server = express();

import bodyParser from 'body-parser';
server.use(bodyParser.json());

//http://localhost:8888/api/ledger
//http://localhost:8888/api/ledger/test@test.com
server.use('/api', router);

const port = process.env.PORT || 8080;
server.listen(port);

console.log(`server has started on port ${port}`);

export default server;
