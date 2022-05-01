import React from "react";
import { selectOwnerType } from "./utils";

function ShowResult(props) {
  var score = selectOwnerType(props.response);

  const titles = Object.keys(score.cars)
  const images = Object.values(score.cars)

  return (
    <div>
      {images.map((image) => (
        <img src={image} height="360px" width="620px" />
      ))}
      <br/>
      Ваш тип - <span style={{color: "red", fontSize: "48px"}}> {score.owner_type} </span>
      <br/>
      <div style={{width: "400px", marginLeft: "40%"}}>
        {score.additionalInfo}
      </div>
      
      <br/>
      <div style={{backgroundColor : "green"}}>
        {score.additionalPictures.map((image) => (
          <img src={image} height="500px" width="620px" />
        ))}
      </div>
      
    </div>
  );
}

export default ShowResult;
