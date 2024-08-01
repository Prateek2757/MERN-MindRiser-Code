let number = [1,2,6,8,9];

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
})




