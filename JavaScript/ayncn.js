// setTimeout((name) => {
//   for (let i = 0; i < 10; i++) console.log("pratik");
// }, 1000);

let promise = new Promise((res, erj) => {
  setTimeout(() => {
       //erj("chalena")
    //erj("Chalena")
    res({
      data: {
        name: "Pratik",
        email: "pratikgurgaian57@gmail.com",
      },
    });
  }, 2000);
});

// try {
//   let lastname = "guragain";
//   let firstname = "Pratik";
//   let fullname = lastname + firstname;
//   console.log(fullname);
// } catch (error) {
//   console.log(error.message);
// }


promise
.then((response) => {
  console.log(response);
  console.log(response.data.email);
})
.catch((error)=>{
    console.log("Erroer Occur",error);
})
  
