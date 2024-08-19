//import { login } from "./auth";
const auth = require("./auth")
/* 
    node global objects
        __filename
        __dirname
        require
        module
    
    modules
        - core module
        - third party module
        - local module
*/

// console.log(__dirname)
// console.log(__filename)

// const fs = require("fs")
// fs.writeFileSync("cutsom.txt", "hello world")
// const path = require("path")

// const http = require("http")
// http.createServer()

 const name = (name)=>{
    console.log(name); 
}
name("xxx")

auth.login("ram@gmail.com", "Password");
auth.login("hari@gmail.com", "ppassword");
auth.login("shyam@gmail.com", "Password");







