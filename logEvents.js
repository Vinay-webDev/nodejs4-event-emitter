//////////////////////////////////////////////////////////////////
// event Emitter
/*1.👉👉👉remember before we add or install package to our project we need to initialize npm first👈👈👈
2.install production dependencies ==>> npm i date-fns
                                        npm i uuid
3.and install nodemon as devDependency ===>> npm i nodemon -D
4. 👉👉also don't forget to change scripts👈👈
*/
///////////////////////////////////////////////////////////////////////////////////
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

//Let's also import common core modules we need those

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async(message) => {
    const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logData = `${date}\t${uuid}\t${message}`;
    console.log(logData);
    ///here comes the async() part
    // we need to write these log data in a new file
    // 👉👉don't forget to use await👈👈
    try {
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logData);
    } catch(err) {
        console.error(err);
    }
}
// Let's export this custom module
module.exports = logEvents;
























///////////////////////////////////////////////////////////////////////////////////
/*PS F:\Documents\github\nodejs4-event-emitter> npm init -y
Wrote to F:\Documents\github\nodejs4-event-emitter\package.json:

{
  "name": "nodejs4-event-emitter",
  "version": "1.0.0",
  "description": "",
  "main": "logEvents.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


PS F:\Documents\github\nodejs4-event-emitter> npm i date-fns

added 1 package, and audited 2 packages in 18s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS F:\Documents\github\nodejs4-event-emitter> npm i uuid

added 1 package, and audited 3 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS F:\Documents\github\nodejs4-event-emitter> npm i nodemon -D

added 29 packages, and audited 32 packages in 2s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS F:\Documents\github\nodejs4-event-emitter> 
*/
/////////////////////////////////////////////////////////////////////////////















