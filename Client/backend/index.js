const express = require("express");
var cors = require('cors')
const dbConnect = require("./db");
const app = express();
dbConnect();

const port = 5000;
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello jhapa");

});
//api create 
app.use('/api/auth',require('./Routes/Auth'))
app.use('/api/product',require('./Routes/Product'))
app.use('/api/loginauth',require('./Routes/LoginAuth'))


app.listen(port, () => {
    console.log("App is Listening on port",port);
    
});
