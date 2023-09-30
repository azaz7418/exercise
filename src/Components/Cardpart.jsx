const Cardpart =({cardInfo, clickHandler})=>{
  const { id, img, excerciseName, details, age, time } = cardInfo;
  return (
    <div>
     <div className="card">
      <div>
        <img src={img}/>
        <h3>{excerciseName}</h3>
        <p>{details}</p>
        <h5>For Age: {age}</h5>
        <h5>Timr Required: {time}</h5>
        <button onClick={clickHandler}>Add to list</button>
      </div>
    </div>
    </div>
    )
}
export default Cardpart;