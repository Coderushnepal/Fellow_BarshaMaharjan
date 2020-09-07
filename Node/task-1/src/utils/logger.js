// export function info(text) {
//  console.log(` [ ${new Date().toISOString()}] [ INFO ] ${text} \n`)
//  next();
// }

import winston, { format } from 'winston';


// export function error(err) {
//     if(err) {
//         console.log(` [ ${new Date().toISOString()}] [ ERROR ] ${text}\n ${err.toString()} \n`)
//     }
//     console.log(` [ ${new Date().toISOString()}] [ ERROR ] ${text} \n`)
//     next();
// }

// export function debug(text, params) {
//     console.log(` [ ${new Date().toISOString()}] [ DEBUG ] ${text} \n ${JSON.stringify(params)}`)
//     next();
// }

const logger = winston.createLogger({
    
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
export default logger;