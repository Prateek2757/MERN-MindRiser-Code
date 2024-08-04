/* let number = [1,2,6,8,9];

  evenNum = number.filter((el)=>{
          if(el % 2 == 0)
            return true;
})
 console.log(evenNum);



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
      userId: 8,
      id: 3,
      title: "task three",
      completed: true,
    },
  ];

let todoComplted = [];
let todoIncompled = [] ;

todos.forEach((el)=>{
    if(el.completed){
    todoComplted.push(el); 
      console.log(todoComplted);
    } else {
        todoIncompled.push(el);
        console.log(todoIncompled);
    }
}) */

let cartItems = [
  {
    name: "ram",
    products: [
      { title: "watch", price: 1500 },
      { title: "mouse", price: 500 },
    ],
  },
  {
    name: "hari",
    products: [
      { title: "watch", price: 1000 },
      { title: "keyboard", price: 1000 },
      { title: "mouse", price: 500 },
    ],
  },
  {
    name: "sita",
    products: [{ title: "watch-gm", price: 10000 }],
  },
];

/* 
    ram has ordered of rs 1500 
    hari  has ordered of rs 2500 
    sita  has ordered of rs 10000 
*/

cartItems.forEach((element) => {
  let totalPrice = 0;
  element.products.forEach((element) => {
    totalPrice += element.price;
  });
  //console.log(`${element.name} Has Ordered Total of Rs. ${totalPrice}`);
});

for (let i = 0; i < cartItems.length; i++) {
  let product = cartItems[i].products;
  let totalPrice = 0;
  for (let i = 0; i < product.length; i++) {
    let price = product[i].price;
    totalPrice += price;
  }
     console.log(`${cartItems[i].name} has ordered Of Rs ${totalPrice} `);
}

cartItems.map((element) => {
  let products = element.products;
  let totalPrice = 0;
       products.map((product) => {
    totalPrice += product.price;
  });
   console.log(totalPrice);
});

