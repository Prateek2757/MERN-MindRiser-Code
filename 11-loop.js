let users = ["sita", "hari", "ram", "shyam", "abc", "ijk", "xyz"];

/* 
    in index 0 user is ram
    in index 1 user is shyam
    in index 2 user is hari
    in index 3 user is sita
*/

/* 
console.log(`in index 0 user is ${users[0]}`);
console.log(`in index 1 user is ${users[1]}`);
console.log(`in index 2 user is ${users[2]}`);
console.log(`in index 3 user is ${users[3]}`); */

// printUser(0)
// printUser(1)
// printUser(2)
// printUser(3)
// printUser(4)
// printUser(5)
// printUser(6)

/* loop
    - to perform repetitive task

    for loop
    - when we know exact number of iterations


    for( <startingPoint>;<condition>;<mutator>){
        // do some repetitive task
    }

*/

// for (let number = 0; number < 3; number++ ) {
//     console.log(number)
// }

// for (let number = 0; number <= 4; number++ ) {
//     console.log(number+1)
// }

users = ["sita", "hari", "ram", "shyam", "abc", "ijk", "xyz"];

for (let index = 0; index <= users.length - 1; index++) {
  //console.log(`in index ${index} user is ${users[index]}`);
}

//console.log("end of loop");

let db_users = [
  { name: "Aarav", email: "aarav@gmail.com", password: "aarav0" },
  { name: "Aarya", email: "aarya@gmail.com", password: "aarya1" },
  { name: "Aasha", email: "aasha@gmail.com", password: "aasha2" },
  { name: "Anisha", email: "anisha@gmail.com", password: "anisha3" },
  { name: "Amit", email: "amit@gmail.com", password: "amit4" },
  { name: "Anjana", email: "anjana@gmail.com", password: "anjana5" },
  { name: "Bijay", email: "bijay@gmail.com", password: "bijay6" },
  { name: "Bikash", email: "bikash@gmail.com", password: "bikash7" },
  {
    name: "Chhiring",
    email: "chhiring@gmail.com",
    password: "chhiring8",
  },
  { name: "Dilip", email: "dilip@gmail.com", password: "dilip9" },
  {
    name: "Dipendra",
    email: "dipendra@gmail.com",
    password: "dipendra10",
  },
  { name: "Gagan", email: "gagan@gmail.com", password: "gagan11" },
  { name: "Gauri", email: "gauri@gmail.com", password: "gauri12" },
  { name: "Hari", email: "hari@gmail.com", password: "hari13" },
  {
    name: "Ishwari",
    email: "ishwari@gmail.com",
    password: "ishwari14",
  },
  { name: "Jeevan", email: "jeevan@gmail.com", password: "jeevan15" },
  { name: "Kabita", email: "kabita@gmail.com", password: "kabita16" },
  { name: "Kiran", email: "kiran@gmail.com", password: "kiran17" },
  {
    name: "Krishna",
    email: "krishna@gmail.com",
    password: "krishna18",
  },
  { name: "Laxmi", email: "laxmi@gmail.com", password: "laxmi19" },
  { name: "Manish", email: "manish@gmail.com", password: "manish20" },
  { name: "Nabin", email: "nabin@gmail.com", password: "nabin21" },
  {
    name: "Nirajan",
    email: "nirajan@gmail.com",
    password: "nirajan22",
  },
  {
    name: "Pradeep",
    email: "pradeep@gmail.com",
    password: "pradeep23",
  },
  { name: "Pragya", email: "pragya@gmail.com", password: "pragya24" },
  { name: "Rajan", email: "rajan@gmail.com", password: "rajan25" },
  { name: "Rina", email: "rina@gmail.com", password: "rina26" },
  { name: "Sabin", email: "sabin@gmail.com", password: "sabin27" },
  { name: "Sabina", email: "sabina@gmail.com", password: "sabina28" },
  { name: "Sajan", email: "sajan@gmail.com", password: "sajan29" },
  { name: "Saroj", email: "saroj@gmail.com", password: "saroj30" },
  { name: "Shanti", email: "shanti@gmail.com", password: "shanti31" },
  {
    name: "Srijana",
    email: "srijana@gmail.com",
    password: "srijana32",
  },
  { name: "Subash", email: "subash@gmail.com", password: "subash33" },
  { name: "Suman", email: "suman@gmail.com", password: "suman34" },
  { name: "Sunil", email: "sunil@gmail.com", password: "sunil35" },
  { name: "Sushil", email: "sushil@gmail.com", password: "sushil36" },
  { name: "Urmila", email: "urmila@gmail.com", password: "urmila37" },
  { name: "Urmila", email: "pratik@gmail.com", password: "11111111" },
  { name: "Yogesh", email: "yogesh@gmail.com", password: "yogesh38" },
];

/* 
  TODO:
      create a function to check the email and password for a user 
  
      NOTE: we have lots of user , we have to check through each data. 
  
  OUTPUT:
      loginUser("yogesh@gmail.com","yogesh38") // login successful
      loginUser("urmila@gmail.com","urmila37") // login successful
      loginUser("urmila@gmail.com","urmila-wrong") // Invalid Credential
      
  
  */

//   let loginuser = (userEmail, userPassword) => {
//     for (let i = 0; i < db_users.length; i++) {
//       if (
//         userEmail == db_users[i].email &&
//         userPassword == db_users[i].password
//       ) {
//         console.log("Login Sucessfull");
//         return;
//       }
//     }
//     console.log("Invalid Credentials");
//   };

//   loginuser("yogesh@gmail.com", "yogesh38");
//   loginuser("pratik@gmail.com", "11111111");
//   loginuser("pratik@gmail.com", "11111111xx");
//   loginuser("pratik@gmail.com", "11111111xx");

function generateEvenNumber(num) {
  for (let i = 2; i <= num; i++) {
    // console.log(num);
    if (i % 2 == 0) {
     // console.log(i);
    }
  }
}

generateEvenNumber(50);

function identifyEvenNumber(num) {
     if(isNaN(num)){
          console.log("The provided data is not an number");
     }
     else if(num%2==1) {
        console.log("Yes It is a ODd Number");
     }

     else{
        console.log("It is even  a number")
     }
}

identifyEvenNumber(2);
identifyEvenNumber(1);
identifyEvenNumber("hello");


const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]



/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/
      for(i=0;i<nepaliNames.length;i++){
          nepaliNames[i].add

            console.log(nepaliNames[i]);
      }  
        