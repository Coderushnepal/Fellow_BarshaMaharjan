import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import logger from "./utils/logger";
import routes from "./route";
import cors from 'cors';

const server = express();
 dotenv.config();
 
 server.use(cors());
server.use(bodyParser.json());
server.use(routes);
// server.use('/uploads', express.static('uploads'));



server.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);
});