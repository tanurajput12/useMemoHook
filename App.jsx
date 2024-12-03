// import { useState,useMemo} from "react";
// const App=()=>{
//   const [mynum,setMynum]=useState(0);
//   const [mydata,setMydata]=useState(100);
//   const multi=useMemo(()=>{
//     console.log("******");
//     return mynum*3;
//   },[mynum])
//   return(
// <>
// <h1>welcome to the cybrom</h1>
//   <h1>My multiplication:{multi}</h1>
//   <h1>my increment:{mynum}</h1>
//   <h1>my decrment:{mydata}</h1>
//   <button onClick={()=>{setMynum(mynum+1)}}>increment</button>
//   <button onClick={()=>{setMydata(mydata-1)}}>decrement</button>

// </>
//   )
// }
// export default App;
import { useState,useMemo } from "react";
const App=()=>{
  const [mynum,setMynum]=useState(0);
  const[nm,setNm]=useState("");
  const heavyfun=useMemo(()=>{
    for(var i=0;i<=1000000000;i++)
    {

    }
    return mynum*2;
  },[mynum])
  return(
    <>
    <h1> welcome0</h1>
    <h1>{heavyfun}</h1>
    <input type="number" value={mynum} onChange={(e)=>{setMynum(e.target.value)}}/>
    <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}}/>
    
  
    </>
  )
}
export default App;