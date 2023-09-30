import { useEffect, useState } from "react";
import Card from "./Card";
import Profile from "./Profile";

const Mealdb = () => {
  // Fetch

  const [foods, setFood] = useState([]);
  const [profile, setProfile] = useState([]);
  //console.log(profile)

  const mealData = async () => {
    const res = await fetch("fetchapi.json");
    const meals = await res.json();
    setFood(meals);
  };
  useEffect(() => {
    mealData();
  }, []);

  return (
    <div className="body-compotant">
      <div className="part">
        {foods.map((x) => (
          <Card dataList={x} profiles={profile} setprofile={setProfile}></Card>
        ))}
      </div>
      <div className="profile">
      
       
        <Profile profiles={profile}></Profile>
      
        
      </div>
    </div>
  );
};

export default Mealdb;
