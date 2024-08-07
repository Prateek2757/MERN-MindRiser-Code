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
  if (isNaN(num)) {
    console.log("The provided data is not an number");
  } else if (num % 2 == 1) {
    console.log("Yes It is a ODd Number");
  } else {
    console.log("It is even  a number");
  }
}

identifyEvenNumber(2);
identifyEvenNumber(1);
identifyEvenNumber("hello");

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
let dbUsers = [];

for (let i = 0; i < nepaliNames.length; i++) {
  let name = nepaliNames[i];
  dbUsers[i] = {
    name,
    email: `${name.toLowerCase()}@gmail`,
    password: name + i,
  };

  //  dbUsers.push({
  //   name: name,
  //   email : `${name}@gmail`,
  //   password : `${name}11`
  //})
}

console.log(dbUsers);
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

/* 
    code here

 */

//console.log(arr1) // should print me [2,3,6,8]

/* 

    array functions
    
*/

let arr = () => {
  let arr1 = [1, 2, 3, 4];
  for (i = 0; i < arr1.length; i++) {
    let arr2 = [arr1[i] * 2];

    //console.log(arr2);
  }
};

arr();

let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "task two",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "task three",
    completed: true,    
  },
];

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

// for (let i = 0; i < todos.length; i++) {
//   let output = todos[i].completed
//     ? `${todos[i].title} Is Completed`
//     : `${todos.title} Is Not   completed`;
//   console.log(output);
// }

todos.forEach((element) => {
  /* if (element.completed) {
    console.log("Completed");
  } else {
    console.log("Incompleted");
  } */
    
   console.log(element.completed ? "Completed" : "Not Complted");

});

let countries = [
  {
    code: "af",
    name: "Afghanistan",
    path: "afghanistan",
  },
  {
    code: "al",
    name: "Albania",
    path: "albania",
  },
  {
    code: "dz",
    name: "Algeria",
    path: "algeria",
  },
  {
    code: "as",
    name: "American Samoa",
    path: "americansamoa",
  },
  {
    code: "ad",
    name: "Andorra",
    path: "andorra",
  },
  {
    code: "ao",
    name: "Angola",
    path: "angola",
  },
  {
    code: "ai",
    name: "Anguilla",
    path: "anguilla",
  },
  {
    code: "aq",
    name: "Antarctica",
    path: "antarctica",
  },
  {
    code: "ag",
    name: "Antigua and Barbuda",
    path: "antiguaandbarbuda",
  },
  {
    code: "ar",
    name: "Argentina",
    path: "argentina",
  },
  {
    code: "am",
    name: "Armenia",
    path: "armenia",
  },
  {
    code: "aw",
    name: "Aruba",
    path: "aruba",
  },
  {
    code: "au",
    name: "Australia",
    path: "australia",
  },
  {
    code: "at",
    name: "Austria",
    path: "austria",
  },
  {
    code: "az",
    name: "Azerbaijan",
    path: "azerbaijan",
  },
  {
    code: "bs",
    name: "Bahamas",
    path: "bahamas",
  },
  {
    code: "bh",
    name: "Bahrain",
    path: "bahrain",
  },
  {
    code: "bd",
    name: "Bangladesh",
    path: "bangladesh",
  },
  {
    code: "bb",
    name: "Barbados",
    path: "barbados",
  },
  {
    code: "by",
    name: "Belarus",
    path: "belarus",
  },
  {
    code: "be",
    name: "Belgium",
    path: "belgium",
  },
  {
    code: "bz",
    name: "Belize",
    path: "belize",
  },
  {
    code: "bj",
    name: "Benin",
    path: "benin",
  },
  {
    code: "bm",
    name: "Bermuda",
    path: "bermuda",
  },
  {
    code: "bt",
    name: "Bhutan",
    path: "bhutan",
  },
  {
    code: "bo",
    name: "Bolivia",
    path: "bolivia",
  },
  {
    code: "ba",
    name: "Bosnia and Herzegovina",
    path: "bosnia",
  },
  {
    code: "bw",
    name: "Botswana",
    path: "botswana",
  },
  {
    code: "br",
    name: "Brazil",
    path: "brazil",
  },
  {
    code: "io",
    name: "British Indian Ocean Territory",
    path: "britishindianoceanterritory",
  },
  {
    code: "vg",
    name: "British Virgin Islands",
    path: "britishvirginislands",
  },
  {
    code: "bn",
    name: "Brunei",
    path: "brunei",
  },
  {
    code: "bg",
    name: "Bulgaria",
    path: "bulgaria",
  },
  {
    code: "bf",
    name: "Burkina Faso",
    path: "burkinafaso",
  },
  {
    code: "bi",
    name: "Burundi",
    path: "burundi",
  },
  {
    code: "kh",
    name: "Cambodia",
    path: "cambodia",
  },
  {
    code: "cm",
    name: "Cameroon",
    path: "cameroon",
  },
  {
    code: "ca",
    name: "Canada",
    path: "canada",
  },
  {
    code: "cv",
    name: "Cape Verde",
    path: "capeverde",
  },
  {
    code: "ky",
    name: "Cayman Islands",
    path: "caymanislands",
  },
  {
    code: "cf",
    name: "Central African Republic",
    path: "centralafricanrepublic",
  },
  {
    code: "td",
    name: "Chad",
    path: "chad",
  },
  {
    code: "cl",
    name: "Chile",
    path: "chile",
  },
  {
    code: "cn",
    name: "China",
    path: "china",
  },
  {
    code: "cx",
    name: "Christmas Island",
    path: "christmasisland",
  },
  {
    code: "cc",
    name: "Cocos Islands",
    path: "cocoskeelingislands",
  },
  {
    code: "co",
    name: "Colombia",
    path: "colombia",
  },
  {
    code: "km",
    name: "Comoros",
    path: "comoros",
  },
  {
    code: "ck",
    name: "Cook Islands",
    path: "cookislands",
  },
  {
    code: "cr",
    name: "Costa Rica",
    path: "costarica",
  },
  {
    code: "hr",
    name: "Croatia",
    path: "croatia",
  },
  {
    code: "cu",
    name: "Cuba",
    path: "cuba",
  },
  {
    code: "cw",
    name: "Curacao",
    path: "curacao",
  },
  {
    code: "cy",
    name: "Cyprus",
    path: "cyprus",
  },
  {
    code: "cz",
    name: "Czech Republic",
    path: "czechrepublic",
  },
  {
    code: "cd",
    name: "Democratic Republic of the Congo",
    path: "congodemocraticrepublic",
  },
  {
    code: "dk",
    name: "Denmark",
    path: "denmark",
  },
  {
    code: "dj",
    name: "Djibouti",
    path: "djibouti",
  },
  {
    code: "dm",
    name: "Dominica",
    path: "dominica",
  },
  {
    code: "do",
    name: "Dominican Republic",
    path: "dominicanrepublic",
  },
  {
    code: "tl",
    name: "East Timor",
    path: "easttimor",
  },
  {
    code: "ec",
    name: "Ecuador",
    path: "ecuador",
  },
  {
    code: "eg",
    name: "Egypt",
    path: "egypt",
  },
  {
    code: "sv",
    name: "El Salvador",
    path: "elsalvador",
  },
  {
    code: "gq",
    name: "Equatorial Guinea",
    path: "equatorialguinea",
  },
  {
    code: "er",
    name: "Eritrea",
    path: "eritrea",
  },
  {
    code: "ee",
    name: "Estonia",
    path: "estonia",
  },
  {
    code: "et",
    name: "Ethiopia",
    path: "ethiopia",
  },
  {
    code: "fk",
    name: "Falkland Islands",
    path: "falklands",
  },
  {
    code: "fo",
    name: "Faroe Islands",
    path: "faroeislands",
  },
  {
    code: "fj",
    name: "Fiji",
    path: "fiji",
  },
  {
    code: "fi",
    name: "Finland",
    path: "finland",
  },
  {
    code: "fr",
    name: "France",
    path: "france",
  },
  {
    code: "pf",
    name: "French Polynesia",
    path: "frenchpolynesia",
  },
  {
    code: "ga",
    name: "Gabon",
    path: "gabon",
  },
  {
    code: "gm",
    name: "Gambia",
    path: "gambia",
  },
  {
    code: "ge",
    name: "Georgia",
    path: "georgia",
  },
  {
    code: "de",
    name: "Germany",
    path: "germany",
  },
  {
    code: "gh",
    name: "Ghana",
    path: "ghana",
  },
  {
    code: "gi",
    name: "Gibraltar",
    path: "gibraltar",
  },
  {
    code: "gr",
    name: "Greece",
    path: "greece",
  },
  {
    code: "gl",
    name: "Greenland",
    path: "greenland",
  },
  {
    code: "gd",
    name: "Grenada",
    path: "grenada",
  },
  {
    code: "gu",
    name: "Guam",
    path: "guam",
  },
  {
    code: "gt",
    name: "Guatemala",
    path: "guatemala",
  },
  {
    code: "gg",
    name: "Guernsey",
    path: "guernsey",
  },
  {
    code: "gn",
    name: "Guinea",
    path: "guinea",
  },
  {
    code: "gw",
    name: "Guinea-Bissau",
    path: "guineabissau",
  },
  {
    code: "gy",
    name: "Guyana",
    path: "guyana",
  },
  {
    code: "ht",
    name: "Haiti",
    path: "haiti",
  },
  {
    code: "hn",
    name: "Honduras",
    path: "honduras",
  },
  {
    code: "hk",
    name: "Hong Kong",
    path: "hongkong",
  },
  {
    code: "hu",
    name: "Hungary",
    path: "hungary",
  },
  {
    code: "is",
    name: "Iceland",
    path: "iceland",
  },
  {
    code: "in",
    name: "India",
    path: "india",
  },
  {
    code: "id",
    name: "Indonesia",
    path: "indonesia",
  },
  {
    code: "ir",
    name: "Iran",
    path: "iran",
  },
  {
    code: "iq",
    name: "Iraq",
    path: "iraq",
  },
  {
    code: "ie",
    name: "Ireland",
    path: "ireland",
  },
  {
    code: "im",
    name: "Isle of Man",
    path: "isleofman",
  },
  {
    code: "il",
    name: "Israel",
    path: "israel",
  },
  {
    code: "it",
    name: "Italy",
    path: "italy",
  },
  {
    code: "ci",
    name: "Ivory Coast",
    path: "ivorycoast",
  },
  {
    code: "jm",
    name: "Jamaica",
    path: "jamaica",
  },
  {
    code: "jp",
    name: "Japan",
    path: "japan",
  },
  {
    code: "je",
    name: "Jersey",
    path: "jersey",
  },
  {
    code: "jo",
    name: "Jordan",
    path: "jordan",
  },
  {
    code: "kz",
    name: "Kazakhstan",
    path: "kazakhstan",
  },
  {
    code: "ke",
    name: "Kenya",
    path: "kenya",
  },
  {
    code: "ki",
    name: "Kiribati",
    path: "kiribati",
  },
  {
    code: "xk",
    name: "Kosovo",
    path: "kosovo",
  },
  {
    code: "kw",
    name: "Kuwait",
    path: "kuwait",
  },
  {
    code: "kg",
    name: "Kyrgyzstan",
    path: "kyrgyzstan",
  },
  {
    code: "la",
    name: "Laos",
    path: "laos",
  },
  {
    code: "lv",
    name: "Latvia",
    path: "latvia",
  },
  {
    code: "lb",
    name: "Lebanon",
    path: "lebanon",
  },
  {
    code: "ls",
    name: "Lesotho",
    path: "lesotho",
  },
  {
    code: "lr",
    name: "Liberia",
    path: "liberia",
  },
  {
    code: "ly",
    name: "Libya",
    path: "libya",
  },
  {
    code: "li",
    name: "Liechtenstein",
    path: "liechtenstein",
  },
  {
    code: "lt",
    name: "Lithuania",
    path: "lithuania",
  },
  {
    code: "lu",
    name: "Luxembourg",
    path: "luxembourg",
  },
  {
    code: "mo",
    name: "Macau",
    path: "macau",
  },
  {
    code: "mk",
    name: "Macedonia",
    path: "macedonia",
  },
  {
    code: "mg",
    name: "Madagascar",
    path: "madagascar",
  },
  {
    code: "mw",
    name: "Malawi",
    path: "malawi",
  },
  {
    code: "my",
    name: "Malaysia",
    path: "malaysia",
  },
  {
    code: "mv",
    name: "Maldives",
    path: "maldives",
  },
  {
    code: "ml",
    name: "Mali",
    path: "mali",
  },
  {
    code: "mt",
    name: "Malta",
    path: "malta",
  },
  {
    code: "mh",
    name: "Marshall Islands",
    path: "marshallislands",
  },
  {
    code: "mr",
    name: "Mauritania",
    path: "mauritania",
  },
  {
    code: "mu",
    name: "Mauritius",
    path: "mauritius",
  },
  {
    code: "yt",
    name: "Mayotte",
    path: "mayotte",
  },
  {
    code: "mx",
    name: "Mexico",
    path: "mexico",
  },
  {
    code: "fm",
    name: "Micronesia",
    path: "micronesia",
  },
  {
    code: "md",
    name: "Moldova",
    path: "moldova",
  },
  {
    code: "mc",
    name: "Monaco",
    path: "monaco",
  },
  {
    code: "mn",
    name: "Mongolia",
    path: "mongolia",
  },
  {
    code: "me",
    name: "Montenegro",
    path: "montenegro",
  },
  {
    code: "ms",
    name: "Montserrat",
    path: "montserrat",
  },
  {
    code: "ma",
    name: "Morocco",
    path: "morocco",
  },
  {
    code: "mz",
    name: "Mozambique",
    path: "mozambique",
  },
  {
    code: "mm",
    name: "Myanmar",
    path: "burma",
  },
  {
    code: "na",
    name: "Namibia",
    path: "namibia",
  },
  {
    code: "nr",
    name: "Nauru",
    path: "nauru",
  },
  {
    code: "np",
    name: "Nepal",
    path: "nepal",
  },
  {
    code: "nl",
    name: "Netherlands",
    path: "netherlands",
  },
  {
    code: "an",
    name: "Netherlands Antilles",
    path: "netherlandsantilles",
  },
  {
    code: "nc",
    name: "New Caledonia",
    path: "newcaledonia",
  },
  {
    code: "nz",
    name: "New Zealand",
    path: "newzealand",
  },
  {
    code: "ni",
    name: "Nicaragua",
    path: "nicaragua",
  },
  {
    code: "ne",
    name: "Niger",
    path: "niger",
  },
  {
    code: "ng",
    name: "Nigeria",
    path: "nigeria",
  },
  {
    code: "nu",
    name: "Niue",
    path: "niue",
  },
  {
    code: "kp",
    name: "North Korea",
    path: "northkorea",
  },
  {
    code: "mp",
    name: "Northern Mariana Islands",
    path: "northernmarianaislands",
  },
  {
    code: "no",
    name: "Norway",
    path: "norway",
  },
  {
    code: "om",
    name: "Oman",
    path: "oman",
  },
  {
    code: "pk",
    name: "Pakistan",
    path: "pakistan",
  },
  {
    code: "pw",
    name: "Palau",
    path: "palau",
  },
  {
    code: "ps",
    name: "Palestine",
    path: "palestine",
  },
  {
    code: "pa",
    name: "Panama",
    path: "panama",
  },
  {
    code: "pg",
    name: "Papua New Guinea",
    path: "papuanewguinea",
  },
  {
    code: "py",
    name: "Paraguay",
    path: "paraguay",
  },
  {
    code: "pe",
    name: "Peru",
    path: "peru",
  },
  {
    code: "ph",
    name: "Philippines",
    path: "philippines",
  },
  {
    code: "pn",
    name: "Pitcairn",
    path: "pitcairnislands",
  },
  {
    code: "pl",
    name: "Poland",
    path: "poland",
  },
  {
    code: "pt",
    name: "Portugal",
    path: "portugal",
  },
  {
    code: "pr",
    name: "Puerto Rico",
    path: "puertorico",
  },
  {
    code: "qa",
    name: "Qatar",
    path: "qatar",
  },
  {
    code: "cg",
    name: "Republic of the Congo",
    path: "congo",
  },
  {
    code: "re",
    name: "Reunion",
    path: "reunion",
  },
  {
    code: "ro",
    name: "Romania",
    path: "romania",
  },
  {
    code: "ru",
    name: "Russia",
    path: "russia",
  },
  {
    code: "rw",
    name: "Rwanda",
    path: "rwanda",
  },
  {
    code: "bl",
    name: "Saint Barthelemy",
    path: "saintbarthelemy",
  },
  {
    code: "sh",
    name: "Saint Helena",
    path: "sthelena",
  },
  {
    code: "kn",
    name: "Saint Kitts and Nevis",
    path: "stkitts",
  },
  {
    code: "lc",
    name: "Saint Lucia",
    path: "stlucia",
  },
  {
    code: "mf",
    name: "Saint Martin",
    path: "stmartin",
  },
  {
    code: "pm",
    name: "Saint Pierre and Miquelon",
    path: "stpierre",
  },
  {
    code: "vc",
    name: "Saint Vincent and the Grenadines",
    path: "stvincent",
  },
  {
    code: "ws",
    name: "Samoa",
    path: "samoa",
  },
  {
    code: "sm",
    name: "San Marino",
    path: "sanmarino",
  },
  {
    code: "st",
    name: "Sao Tome and Principe",
    path: "saotomeandprincipe",
  },
  {
    code: "sa",
    name: "Saudi Arabia",
    path: "saudiarabia",
  },
  {
    code: "sn",
    name: "Senegal",
    path: "senegal",
  },
  {
    code: "rs",
    name: "Serbia",
    path: "serbia",
  },
  {
    code: "sc",
    name: "Seychelles",
    path: "seychelles",
  },
  {
    code: "sl",
    name: "Sierra Leone",
    path: "sierraleone",
  },
  {
    code: "sg",
    name: "Singapore",
    path: "singapore",
  },
  {
    code: "sx",
    name: "Sint Maarten",
    path: "sintmaarten",
  },
  {
    code: "sk",
    name: "Slovakia",
    path: "slovakia",
  },
  {
    code: "si",
    name: "Slovenia",
    path: "slovenia",
  },
  {
    code: "sb",
    name: "Solomon Islands",
    path: "solomonislands",
  },
  {
    code: "so",
    name: "Somalia",
    path: "somalia",
  },
  {
    code: "za",
    name: "South Africa",
    path: "southafrica",
  },
  {
    code: "kr",
    name: "South Korea",
    path: "southkorea",
  },
  {
    code: "ss",
    name: "South Sudan",
    path: "southsudan",
  },
  {
    code: "es",
    name: "Spain",
    path: "spain",
  },
  {
    code: "lk",
    name: "Sri Lanka",
    path: "srilanka",
  },
  {
    code: "sd",
    name: "Sudan",
    path: "sudan",
  },
  {
    code: "sr",
    name: "Suriname",
    path: "suriname",
  },
  {
    code: "sj",
    name: "Svalbard and Jan Mayen",
    path: "svalbard",
  },
  {
    code: "sz",
    name: "Swaziland",
    path: "swaziland",
  },
  {
    code: "se",
    name: "Sweden",
    path: "sweden",
  },
  {
    code: "ch",
    name: "Switzerland",
    path: "switzerland",
  },
  {
    code: "sy",
    name: "Syria",
    path: "syria",
  },
  {
    code: "tw",
    name: "Taiwan",
    path: "taiwan",
  },
  {
    code: "tj",
    name: "Tajikistan",
    path: "tajikistan",
  },
  {
    code: "tz",
    name: "Tanzania",
    path: "tanzania",
  },
  {
    code: "th",
    name: "Thailand",
    path: "thailand",
  },
  {
    code: "tg",
    name: "Togo",
    path: "togo",
  },
  {
    code: "tk",
    name: "Tokelau",
    path: "tokelau",
  },
  {
    code: "to",
    name: "Tonga",
    path: "tonga",
  },
  {
    code: "tt",
    name: "Trinidad and Tobago",
    path: "trinidadandtobago",
  },
  {
    code: "tn",
    name: "Tunisia",
    path: "tunisia",
  },
  {
    code: "tr",
    name: "Turkey",
    path: "turkey",
  },
  {
    code: "tm",
    name: "Turkmenistan",
    path: "turkmenistan",
  },
  {
    code: "tc",
    name: "Turks and Caicos Islands",
    path: "turksandcaicos",
  },
  {
    code: "tv",
    name: "Tuvalu",
    path: "tuvalu",
  },
  {
    code: "vi",
    name: "U.S. Virgin Islands",
    path: "virginislands",
  },
  {
    code: "ug",
    name: "Uganda",
    path: "uganda",
  },
  {
    code: "ua",
    name: "Ukraine",
    path: "ukraine",
  },
  {
    code: "ae",
    name: "United Arab Emirates",
    path: "uae",
  },
  {
    code: "gb",
    name: "United Kingdom",
    path: "uk",
  },
  {
    code: "us",
    name: "United States",
    path: "usa",
  },
  {
    code: "uy",
    name: "Uruguay",
    path: "uruguay",
  },
  {
    code: "uz",
    name: "Uzbekistan",
    path: "uzbekistan",
  },
  {
    code: "vu",
    name: "Vanuatu",
    path: "vanuatu",
  },
  {
    code: "va",
    name: "Vatican",
    path: "vatican",
  },
  {
    code: "ve",
    name: "Venezuela",
    path: "venezuela",
  },
  {
    code: "vn",
    name: "Vietnam",
    path: "vietnam",
  },
  {
    code: "wf",
    name: "Wallis and Futuna",
    path: "wallisandfutuna",
  },
  {
    code: "eh",
    name: "Western Sahara",
    path: "westernsahara",
  },
  {
    code: "ye",
    name: "Yemen",
    path: "yemen",
  },
  {
    code: "zm",
    name: "Zambia",
    path: "zambia",
  },
  {
    code: "zw",
    name: "Zimbabwe",
    path: "zimbabwe",
  },
];

/* 
      find the cods of a specific country 
  
      TODO: 
      create a function findCountryCode 
      - if i pass arguement "Nepal" to the function it should return me np
      - if i pass arguement "zimbabwe" to the function it should return me zw
  
  */

/* 
  
      array functions
      
  */

let findCountryCode = (countriesName) => {
  let result = "Invalid input";
  countries.forEach((country) => {
    if (countriesName.trim().toLowerCase() == country.name.toLowerCase()) {
      result = country.code;
      return;
    }
  });
  return result;
};

// for (i = 0; i < countries.length; i++) {
//   if (countriesName.trim().toLowerCase() == countries[i].name.toLowerCase()) {
//     console.log(countries[i].code);
//         return;
//   }

// }
// console.log("Invalid Input");
//}

console.log(findCountryCode(" nepal   "));
console.log(findCountryCode("Nepalxx"));
console.log(findCountryCode("India"));

const double = (input) => input * 2;
const sum = (input, sec) => input + sec;

console.log(double(12));
console.log(sum(12, 20));

/* 
    Math.random()   //  0 to 1  
    Math.random() * 5   //  0 to 5 // never prints 5 
    Math.floor()   // 1.2  => 1
*/

/* 
    [
        {
            name:"ram"
            age:
            religion:
            ethnicity:
        },
        {
            name:"shyam"
            age:
            religion:
            ethnicity:
        },
        {
            name:"hari"
            age:
            religion:
            ethnicity:
        },
    ]

*/

/* first do for single user */
let names = ["ram", "shyam", "hari"];
let fakeUsers = [];

let ages = [10, 20, 30];
let religions = ["hindu", "buddhist", "christian", "muslim", "others"];
let ethnicities = ["bhramin", "chhetri", "newar", "others"];

let generateRandom = (arr) => {
  let randomNumber = [Math.floor(Math.random() * ages.length)];
  let randomElement = arr[randomNumber];
  return randomElement;
};

for (let i = 0; i < names.length; i++) {
  let name = names[i];

  fakeUsers[i] = {
    Name: name,
    Age: generateRandom(ages),
    Religion: generateRandom(religions),
    Ethinicity: generateRandom(ethnicities),
  };
}
console.log(fakeUsers);

// names.forEach((name) => {
//   fakeUsers = {
//     Name: `"${name}"`,
//     Age: age,
//     Religion: religion,
//     Ethinicity: ethnicity,
//   };
//   console.log(fakeUsers);
// });

// for (valueName of names) {

//   fakeUsers = {
//     Name: `${valueName}`,
//     Age: age,
//     Religion: religion,
//     Ethinicity: ethnicity,
//   };
//   console.log(fakeUsers);
// }

// for (index in names){
//    fakeUsers[index] = { Name: `"${names[index]}"`, Age: age, Religion: religion, Ethinicity: ethnicity }
//  } console.log(fakeUsers)

let dashboard = {
  total: 100,
  expired: 24,
  out_of_stock: 20,
};

let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

const convertValue = (value) => {
  let numString = value.toString().trim();
  let numSplit = numString.split("");
  let nepaliStr = " ";

  for (let i = 0; i < numSplit.length; i++) {
    let digit = numSplit[i];

    nepaliStr += nepali_digits[digit];
  }
  return nepaliStr;
};

dashboard.total = convertValue(dashboard.total);
dashboard.expired = convertValue(dashboard.expired);
dashboard.out_of_stock = convertValue(dashboard.out_of_stock)

console.log(dashboard);

