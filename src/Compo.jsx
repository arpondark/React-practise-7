import React,{ useState } from 'react'



function Compo() {

    let [count,setCount] = useState(0);
    let increment = () =>{
        setCount(count+1);
    }

    let discrement = () =>{
        setCount(count-1);
    }

    let reset = () =>{
        setCount(0);
    } 
    return(
        <>
         <div className="container">
            <p className= "display">{count}</p>
            

        </div>
        <div className='container1'>
        <button className='minus' onClick={discrement}>Discrement</button> 
            <button className='minus' onClick={reset}>Reset</button>
            <button className='minus' onClick={increment}>Incrementt</button>
        </div>
        </>
       

    );

    

}
export default Compo