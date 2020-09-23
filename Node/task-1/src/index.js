import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './route';
import logger from './utils/logger';
import genericErrorHandler from './middlewares/genericErrorHandler';



const loginMiddleware = (req, res, next) => {
    const url =req.url;
    const method =req.method;
    
    logger.info(`${method} ${url}`);

    next();
};
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(loginMiddleware); 
app.use(routes);
app.use(genericErrorHandler);


app.listen(process.env.PORT, () => {
logger.info(`Listening on port ${process.env.PORT}`);
});

