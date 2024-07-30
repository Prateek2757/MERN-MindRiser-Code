const url = 'https://official-joke-api.appspot.com/jokes/random';

const jokesPara = document.querySelector("#jokePara")
const jokesPara2 = document.querySelector("#jokePara2")
const jokesBtn = document.querySelector("#joke");
const getFacts = async ()=>{
    let response = await fetch(url);
   // console.log(response);
     let data = await response.json()
    //  console.log(data);
    //  console.log(data.setup);
    // console.log(data.punchline);
     jokesPara.innerText = data.setup;
     jokesPara2.innerHTML = data.punchline;


};
   jokesBtn.addEventListener("click",getFacts);