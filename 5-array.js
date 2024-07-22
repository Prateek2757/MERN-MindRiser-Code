let fruits = [ "mango" , "banana" , "apple" ]
console.log(fruits);

fruits[1] = "kiwi";
console.log(fruits);


let fruit1 = {
    name : "Appple",

    price:{
       auPrice: 1.5,
       amPrice :1 ,
       nepalPrice : 100,
       canPrice :1,
       ukPrice : 0.5
 },
    name : "Banana",

     price :{
          auPrice : 1
     }
}
//console.log(fruit1);
//Another way

let fruit2 ={
     name:"kiwi",
     prices : [
          {
               country : "Nepal",
               rate : 1
          }
     ] ,

     

}

// object destructureing
let {name, prices,scientificName="Actinidia" }= fruit2;
console.log(fruit2)


 
//console.log(" Before " ,fruit2.prices[0].rate )
//console.log(" After " ,fruit2.prices[0].rate=500 )

let backendResponse = {
     msg: "success",
     result: {
       total: 2,
       data: [
         {
           name: "kiwi",
           scientificName: "k-wrong-xyz",
           prices: [
             {
               country: "us",
               price: 1,
             },
             {
               country: "nepal",
               price: 1, // change this to 100
             },
           ],
         },
         {
           name: "orange",
           scientificName: "k-xyz",
           prices: [
             {
               country: "us",
               price: 2,
             },
             {
               country: "nepal",
               price: 200,
             },
             {
               country: "cad",
               price: 200,
             },
           ],
         },
       ],
     },
   }
/* 
console.log("Before" ,backendResponse);
 
backendResponse.result.data[0].prices[1].price = 100;

console.log("after" ,backendResponse);

backendResponse.result.data[0].prices[2] = {
     country  : "uk",
     price : 200
}
console.log(backendResponse); */



