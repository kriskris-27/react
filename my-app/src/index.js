import React from "react";
import ReactDOM from "react-dom";



function TemporaryName() {
  return (
    <div>
    <img src="image.png" width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first releasead in 2013</li>
      <li>Was first releasead in 2013</li>  
      <li>Was first releasead in 2013</li>
      <li>Is maintaied by FaceBook

      </li>
    </ul>
  </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryName/>);
