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


let studentStatus = (student) => {
  for (i = 0; i < student.length; i++) {
    // let name = student[i].name;
    //console.log(name);

    if (student[i].hasPaidStatus) {
      console.log(`${student[i].name} Has Paid the fee and give exam `);
    } else {
      console.log(`${student[i].name} Hasnot Paid fee and Cannot give exam `);
    }
  }
};
studentStatus(student);


let users = [
    {
      name: "ram",
      hasPaidStatus: false,
      hasScholarship: true,
    },
    {
      name: "hari",
      hasPaidStatus: true,
      hasScholarship: false,
    },
    {
      name: "sita",
      hasPaidStatus: false,
      hasScholarship: false,
    },
  ];

let userStatus = (users) => {
  

  for (i = 0; i < users.length; i++) {
    if (users[i].hasPaidStatus || users[i].hasScholarship) {
      console.log(`${users[i].name} has Able to give exm `);
    } else {
      console.log(`${users[i].name} hasnot Able to give exam `);
    }
  }
};

userStatus(users);
