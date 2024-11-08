import React, { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
const Hooks= () => {

    const [play,setplay]=useState([])
    useEffect(()=>{
        const controller=new AbortController();
        const signal =controller.signal;

        //method one
        // const fetchProducts=async()=>{
        //     try {
        //             const reponse=await fetch('https://dummyjson.com/products?limit=194&skip=0&select=title,price',{signal})
        //             const jsonData=await reponse.json();
        //             setplay(jsonData.products);
                    
        //     } catch (error) {
        //             console.log(error);
        //     }
        // }
        // fetchProducts();

       //another method
       (async()=>{
            try {
                const reponse=await fetch('https://dummyjson.com/products?limit=194&skip=0&select=title,price',{signal})
                const jsonData=await reponse.json();
                setplay(jsonData.products);
                
                } catch (error) {
                        console.log(error);
                }
       })()

        return()=>{
            controller.abort();
        };
    },[])

    return (
        <div>
            <h1>{play.length?play.map(({id,title}:{id:number,title:string})=><p key={id} className="flex" >{id}<GoChevronRight />{title}</p>):""}</h1>
            {/* <h1>counter : {Play}</h1>
            <button onClick={()=>setPlay(prev=>prev+1)} className="btn btn-success">Count</button> */}
        </div>
    )
}

export default Hooks