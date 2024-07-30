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

let userStatus = (users) => {
  for (i = 0; i < users.length; i++) {
    // if (users[i].hasPaidStatus || users[i].hasScholarship) {
    //   console.log(`${users[i].name} has Able to give exm `);
    // } else {
    //   console.log(`${users[i].name} hasnot Able to give exam `);
    if (
      users[i].hasAttendence &&
      (users[i].hasPaidStatus || users[i].hasScholarship)
    ) {
      console.log(`${users[i].name} can give Exam`);
    }
    // else if(users[i].hasAttendence && users[i].hasScholarship){
    //   console.log(`${users[i].name} Has Able To give Exam`);
    // }
    else {
      console.log(`${users[i].name} can not Give exam`);
    }
  }
};
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

let checkPasswordd = (checkEmail, checkPassword) => {
  const message =
    user.email === checkEmail
      ? `${user.name} can login`
      : `${user.name} cannot login`;
  console.log(message);
};
checkPasswordd("ram@ram.com");

/* 

    create a function  getMonthName  to get the name of different months. 

   let name =  getMonthName(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me the result of January and so n. 

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

// Easy to Understand

function getMonthName(getMonthNum) {
  if (getMonthNum === 1) {
    return "january";
  } else if (getMonthNum === 2) {
    return "feb";
  } else if (getMonthNum === 3) {
    return "March";
  } else if (getMonthNum === 4) {
    return "April";
  } else if (getMonthNum === 5) {
    return "may";
  } else if (getMonthNum === 6) {
    return "june";
  } else if (getMonthNum === 7) {
    return "july";
  } else if (getMonthNum === 8) {
    return "Aug";
  } else if (getMonthNum === 9) {
    return "Sept";
  } else if (getMonthNum === 10) {
    return "Oct";
  } else if (getMonthNum === 11) {
    return "Nov";
  } else if (getMonthNum === 12) {
    return "Dec";
  }
  else {
    return `Not Valid Input`
  }
  
}

let monthNamee = getMonthName(5)
  console.log(monthNamee);

//self Done Code little Complex
function getMonthName(getMonthNum) {
  let getNamess = [
    "january",
    "February",
    "march",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "octuber",
    "November",
    "December",
  ];
  let indexRef = getMonthNum;
  let index = indexRef - 1;
  // for (i = 0; i < 12; i++) {
  if (
    (getMonthNum == 1 ||
      getMonthNum == 2 ||
      getMonthNum == 3 ||
      getMonthNum == 4 ||
      getMonthNum == 5 ||
      getMonthNum == 6 ||
      getMonthNum == 7 ||
      getMonthNum == 8 ||
      getMonthNum == 9 ||
      getMonthNum == 10 ||
      getMonthNum == 11 ||
      getMonthNum == 12) &&
    getMonthNum < 13
  ) {
    return getNamess[index];
  } else {
    return `Invalid Input`;
  }
  //}
}

let monthName = getMonthName(18);
console.log(monthName);


let todos = [
  {
      "userId": 1,
      "id": 1,
      "title": "task one",
      "completed": false
  },
  {
      "userId": 1,
      "id": 2,
      "title": "task two",
      "completed": false
  },
  {
      "userId": 1,
      "id": 3,
      "title": "task three",
      "completed": true
  }
]


/* 
  there may be hundred of tasks.. 
  ternary operator. 
*/

/* 
  TODO:
  output
  task one is incomplete
  task two is incomplete
  task three is completed

*/


function todo(){
  for(let i=0;i<todos.length;i++){
           let  output = todos[i].completed ? `${todos[i].title} Is Completed` : `${todos.title} Is Not   completed`
           console.log(output);
  } 
}

todo();