import { useState } from "react";

// keep the add to cart component here

const CartButton = () => {
    //manage state of the count 
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
      setCount(count+1)
    }
    const  decrement =  () => {
      setCount(count-1)
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button onClick={()=> decrement()}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=> increment()}>+</button>
  </div>
  </>;
};
export default CartButton
