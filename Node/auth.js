console.log("I am exposed ");

let dbUsers = [];
let dbUserlOGIN = [];
// const signup = (email, password) => {
//     dbUsers.push({
//         email:email,
//         password:"123$@!#$ADasdfSFASDF!@#$!@#$!@#$@#$!"
//     })
// }

// signup("ram@gmail.com", "password")
// signup("shyam@gmail.com", "password")
// signup("hari@gmail.com", "password")

///console.log(dbUsers);
const login = (email, password) => {
  dbUserlOGIN.push({
    email: email,
    password: password,
  });

  //console.log(dbUserlOGIN);
  const bcrypt = require("bcrypt");
  bcrypt.hash(password, 10, function (err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function (err, reasult) {
      if (reasult) {
        console.log("The User Can Access the page");
      } else {
        console.log("Please Enter Your Correct Details");
      }
    });
  });
};



module.exports = {login};
