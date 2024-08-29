const express = require("express");
const dbConnect = require("./db");
const app = express();
dbConnect();

const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello jhapa");

});
//api create 
app.use('/api/auth',require('./Routes/Auth'))

app.listen(port, () => {
    console.log("App is Listening on port",port);
    
});
