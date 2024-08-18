import { useEffect, useState } from "react";

export let Counter = () => {
  let value = 0;
  const [countValue, setCountValue] = useState(10);

  let increment = () => {
    //console.log("Increment");
    //value = value + 1; we Cant change the state varaible directly
    /* console.log("Value" , value); */
    /*   console.log({value : value}); */
    //console.log({ value });
    setCountValue(countValue + 1);

    //setCountValue("hello" )
  };
  /* let decrement = ()=>{
    setCountValue(countValue- 1)
  } */

  return (
    <>
      <h2 className="increment"> Normal Counter : {value} </h2>
      <h2 className="increment"> State Counter : {countValue} </h2>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setCountValue(countValue - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export let Timer = () => {
  let [count, setCount] = useState(0);
  useEffect(() =>{
    setTimeout(() => {
      setCount((count = count + 1));
    }, 2000)
});
  return <h2>I am rendered {count} times</h2>;
};
