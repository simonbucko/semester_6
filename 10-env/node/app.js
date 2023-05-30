// $env:HELLO="itsme" poweshell
// SET HELLO=bla && node app.js cmd
// HELLO=me node app.js bash

// import dotenv from 'dotenv';
// dotenv.config();

console.log(process.env.HELLO);
// console.log(process.env.PATH);
