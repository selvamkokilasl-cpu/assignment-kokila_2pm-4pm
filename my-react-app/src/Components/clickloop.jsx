import React ,{ usestate,useeffect}from "react";
function app(){
    const[number,setnumber]=usestate(0);
    useeffect(()=>{
        setnumber(number+1)

    })
}