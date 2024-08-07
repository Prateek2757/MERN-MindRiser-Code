let courses = ["Mern", "Phython", "Qa", "AI"];

console.log(courses);

let users = [
    {
      name: "ram",
      age: 10,
      address:{
          permanentAddres:{
              district:"jhapa",
              ward:-1, 
              tole:"Dudhe"
          },
          temporaryAddres:{
              district:"kathmandu",
              ward:10,
              tole:"old baneswor"
          }
      }
    },
    {
      name: "hari",
      age: 20,

       address : {
        permanentAddres :{
            district: "Morang",
            ward : -6,
            tole : "urlabari "
        }
       }
    },
    {
      name: "shyam",
      age: 10,

      address :{
        permanentAddres : {
            district : "Sunsari",
            ward : -8,
            tole : "Itahari"
        }
      }
    },
  ];

let userLen = users.length;


for(i = 0 ; i <userLen ; i++){

    let userWard=Math.abs(users[i].address.permanentAddres.ward);
    console.log(userWard);

}

 let worngtole = users[0].address.permanentAddres.tole;
 worngtole = "Shivagunj";

 console.log(worngtole);








/* for(i=0;i<userLen;i++){
    console.log(users[i]);
} */

let brandDetail = {
  brand: "Samsung",
  ceo: "Han Jong-hee",
  dateEstab: "March 1, 1938",
};

console.log(brandDetail);






