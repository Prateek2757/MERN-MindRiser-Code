/* let sunny = true;

if(sunny){
    console.log("Today is sunny");
}
else{
    console.log("Today is cold");
}
 */

let student = [
  {
    name: "ram",
    hasPaidStatus: false,
  },
  {
    name: "hari",
    hasPaidStatus: true,
  },
  {
    name: "sita",
    hasPaidStatus: false,
  },
];

// let studentStatus = (student) => {
//   for (i = 0; i < student.length; i++) {
//     // let name = student[i].name;
//     //console.log(name);

//     if (student[i].hasPaidStatus) {
//       console.log(`${student[i].name} Has Paid the fee and give exam `);
//     } else {
//       console.log(`${student[i].name} Hasnot Paid fee and Cannot give exam `);
//     }
//   }
// };
// studentStatus(student);

let users = [
  {
    name: "ram",
    hasPaidStatus: false,
    hasScholarship: true,
    hasAttendence: true,
  },
  {
    name: "hari",
    hasPaidStatus: true,
    hasScholarship: false,
    hasAttendence: false,
  },
  {
    name: "sita",
    hasPaidStatus: true,
    hasScholarship: true,
    hasAttendence: false,
  },
];

let userStatus = (users) => {mind
  

  for (i = 0; i < users.length; i++) {
    // if (users[i].hasPaidStatus || users[i].hasScholarship) {
    //   console.log(`${users[i].name} has Able to give exm `);
    // } else {
    //   console.log(`${users[i].name} hasnot Able to give exam `);
      if(users[i].hasAttendence && (users[i].hasPaidStatus || users[i].hasScholarship)){
        console.log(`${users[i].name} can give Exam`);
      }
      // else if(users[i].hasAttendence && users[i].hasScholarship){
      //   console.log(`${users[i].name} Has Able To give Exam`);
      // }
      else{
        console.log(`${users[i].name} can not Give exam`);
      }

  }}
userStatus(users);

let user = {
  name: "ram",
  email: "ram@ram.com",
  password: "ram-password",
};

let checkPassword = (checkEmail, checkPasswod) => {
  if (user.email === checkEmail && user.password === checkPasswod) {
    console.log(`${user.name} can able to login `);
  } else {
    console.log(`${user.name} cannot able to login`);
  }
};


//checkPassword("ram@ram.com", "ram-password");
//checkPassword("ram@ram.com", "ram-pasword");

let checkPasswordd = (checkEmail,checkPassword) =>{
         const message = user.email === checkEmail? `${user.name} can login` : `${user.name} cannot login`;
         console.log(message);
}
checkPasswordd("ram@ram.com")
