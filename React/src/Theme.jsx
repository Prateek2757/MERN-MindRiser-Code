import React from "react"
import { useState } from "react"
export default function Theme() {
   
  const [setDefault,setColor] = useState("light")
   
    return (
        <div className = {`theme ${setDefault == "dark" ? "dark" : ""}  `}>  
            { setDefault === "dark" && <button onClick={()=>{setColor("light")}} >light</button> }     
            {setDefault === "light" &&<button onClick={()=>{setColor("dark")}}>dark</button> }
            
            <p>current Theme : {setDefault}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus facilis nesciunt quaerat
                excepturi, aut expedita ullam sit pariatur tenetur temporibus officiis aliquid fugit fugiat quas placeat
                mollitia totam cumque.
            </p>
        </div>
    )
}
