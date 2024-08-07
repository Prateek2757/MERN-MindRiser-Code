let add1 = 5;
let add2 = 6;
let sum2 = add1 + add2;

//console.log(`${add1} + ${add2} = 11 , 8 + 9 = 17 , 6 + 6 = 11 , 7 + 7 = 14 `);

 function sum(a,b){
    return a+b;

}
/* 
console.log(sum(5,6));
console.log(sum(55,11));
console.log(sum(77,6));  */


/* console.log(` the sum of  and   is `, sum(5,6) );
console.log(` the sum of  and  is `, sum(55,6) );
console.log(` the sum of and  is `, sum(58,6) ); */


let fruitsData = [
    {
      name: "kiwi",
      scientificName: "k-wrong-xyz",
      price: 100,
    },
    {
      name: "orange",
      scientificName: "k-xyz",
      price: 50,
    },
    {
      name: "apple",
      scientificName: "k-xyz",
      price: 150,
    },
  ]

  fruitLen = fruitsData.length;

  for(i = 0; i<fruitLen ; i ++){
    let name = fruitsData[i].name
    let price = fruitsData[i].price;

    // console.log(`the Price of ${name} is ${price} `)
     
  }

  //object Destructuring 

  const person1 = {
    name : "Pratik",
    className : "Bachelor 7Th Sem",


  }

 let {name,classNamee, surName = "Guragain"  } = person1;
/* 
 console.log(className);
 console.log(surName);
 */
 //doing with function 
 console.log(name);

 // age : umer le naya value assign garxa arko name ma

function displayPerson({age : umer,address : tegana, newAddress="New- Baneswor"}) {
    //console.log(age);
    console.log(tegana);
    console.log(newAddress);
    console.log(umer);
}

 const  person2 = {
     age : 22,
     address : "old-Baneswor",
     
 }

 displayPerson(person2);

 //Array Destructureing

 const fruits  = ["banana","apple", "kiwi","orange" ];

 const [fruitFirst,,,fruitLast]= fruits;//,, is used for skiping the value of array
 
 console.log(fruitLast); 
 
    



