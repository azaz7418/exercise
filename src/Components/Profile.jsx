import "./Profile.css";
import{useState} from 'react'
const Profile = ({profiles}) => {
  const info = profiles.map((x)=>x.time)
  const [breakTime, setDreakTime] = useState('')
  
  const breakTimeHandker =(numder)=>{
    setDreakTime(numder)
  }
  
  return (
    <div>
      
      <div className="name">
        <h2>Azaz Ahamed</h2>
        <p>Khulna, Bangladesh</p>
      </div>

      <div className="personal-information">
        <div className="information">
          <p>
            <h5>75</h5>kg
          </p>
          <p>Weight</p>
        </div>
        <div className="information">
          <h5>6.5</h5>
          <p>Height</p>
        </div>
        <div className="information">
          <p>
            <h5>23</h5>yrs
          </p>
          <p>Age</p>
        </div>
      </div>

      <h3>Add A Break</h3>

      <div className="btn-break">
        <button onClick={()=>setDreakTime(10)}>10s</button>
        <button onClick={()=>setDreakTime(20)}>20s</button>
        <button onClick={()=>setDreakTime(30)}>30s</button>
        <button onClick={()=>setDreakTime(40)}>40s</button>
        <button onClick={()=>setDreakTime(50)}>50s</button>
      </div>
      <h3>Exercise Details</h3>
      <div className="exercise-details">
        <h6>Exercise time</h6>
        
         <p>{info} seconds</p>
        
      </div>
      <div className="exercise-details">
        <h6>Break time</h6>
        <p>{breakTime} seconds</p>
      </div>
    </div>
  );
};





export default Profile;
