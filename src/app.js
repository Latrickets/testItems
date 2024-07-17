import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes.js';
import {errorHandler} from './utils/errorHandler.js';
const app = express();

app.use(bodyParser.json());
app.use('/api/v1', itemRoutes);
app.use(errorHandler);

export default app;
