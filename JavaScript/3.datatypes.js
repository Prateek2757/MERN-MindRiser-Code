
let user = "ram,shyam,hari,sita"
console.log(user)



let evenNumbers = [2,8,10,"seven"];

let index= 4;
let value = 2;


evenNumbers.splice(index,0,value )

console.log("Before",evenNumbers[3]);

evenNumbers[3]= 7;

console.log("After",evenNumbers[3])


let courses=['mern',"qa","phython"];

courses.splice(2,0,"dm")

console.log(courses)

let colors = ['red','green','blue'];

let colorValues={
    red:{
        rgb : 'rgb(255,0,)',
        hex : "#FF0000"
    },
    blue:{
        rgb : 'rgb(0,0,255)',
        hex : '#0000FF'
    },
    green : {
        rgb : 'rgb(0,255,0)',
        hex : "#00ff00"
    }
}

 //let colorValueLen= colorValues.length;
console.log(colorValues);


/* we need to show hex value */



let users = [
    {name:"ram",phoneNo :982085557,
        address :{
            permanent:{
                district : "jhapa",
                ward : 6,
                tole : "shivgunj"
                
            }
        }

    },
    {name:"shyam",phoneNo :980000000},
    {name:"hari",phoneNo :98000000}
];

 let userLen=users.length;

for(i=0;i<userLen;i++){
    console.log(users[i]);
}


  let wardNo = users.name;

console.log(wardNo);







