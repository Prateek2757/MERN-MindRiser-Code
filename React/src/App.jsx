import ProductList from "./components/ProductList";
import { Counter, Timer } from "./Counter";
import GoogleTabs from "./GoogleTabs";
import Navbar from "./Navbar";
import Theme from "./Theme";


/**
 * 
 * @returns 
 */
export default function App() {
  return (
    <div>
     {/*  <ProductList/> */}
        {/* 
      <Theme/>
      <GoogleTabs/>
        <Navbar/>
      */}
        <Counter/>
        <Timer/>
    </div>
  );
}
