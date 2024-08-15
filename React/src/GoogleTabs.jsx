import { useState } from "react";

const GoogleTabs = () => {
 
  const [currentTab, setTab] = useState(null);
  const [defaultValue, setColorValue] = useState("dark");

  return (
    <> 
    <div className= {` theme ${defaultValue =="dark" ? "dark" :"" }`} >
      {defaultValue == "dark" && <button className="lightbtn" onClick={()=>{setColorValue("light")}} >Light</button>}
      {defaultValue == "light"  && <button className="darkbtn" onClick={()=>{setColorValue("dark")}} >Dark</button>}
      <p
        onClick={() => {
          setTab("Chosee one tab");
        }}
      >
        current tab: {currentTab}
      </p>
      <ul>
        <li
          onClick={() => {
            setTab("All");
          }}
        >
        All
        </li>
        <li
          onClick={() => {
            setTab("Images");
          }}
        >
          images
        </li>
        <li onClick={() => setTab("Videos")}>videos</li>
        <li
          onClick={() => {
            setTab("Others");
          }}
        >
          others
        </li>
      </ul>
      <hr />
      {
        currentTab === "All" && 
        <div>
          <h2>All </h2>
          <p>
            all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tenetur necessitatibus dolor repellendus quisquam voluptatum
            perferendis vitae sunt recusandae, repudiandae corrupti praesentium
            sint voluptate. Esse voluptatem facilis deserunt molestias
            voluptates.
          </p>
          <p>
            all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tenetur necessitatibus dolor repellendus quisquam voluptatum
            perferendis vitae sunt recusandae, repudiandae corrupti praesentium
            sint voluptate. Esse voluptatem facilis deserunt molestias
            voluptates.
          </p>
        </div>
      }
     </div>

    </>
  );
};



export default GoogleTabs;
