import { useState } from "react";
import "./Card.css";
import Cardpart from "./Cardpart";

const Card = ({ dataList, profiles, setprofile })=> {
 const [timer, setTimer] = useState(dataList.time)
const clickHandler= ()=>{
  const isExist = profiles.find((x) => x.id === dataList.id);
  if(!isExist){
    setprofile([dataList]);
  }else{
    const newData=profiles.map((x) =>{ 
      if(x.id === dataList.id){
        
        //x.time +=timer
        parseInt(x.time +=timer)
      }
      return x
    });
    setprofile(newData)
  }
    
}
  return (
    <div>
      <Cardpart cardInfo={dataList} clickHandler={clickHandler}></Cardpart>
    </div>
  );
};
export default Card;
