import React from "react";
import ReactDOM from "react-dom";

function IlikeinReact() 
{
  return(
    <>
    <header>
      <nav>
        <img src="image.png" width="50px"/>
      </nav>
    </header>
    <h1>I like React because</h1>
    <ol>
      <li>i like components</li>
      <li>i like imperative</li>
      <li>I like reusability</li>
    </ol>
    <foorter>
      <small>© 2024 kris development. All rights reserved.</small>
    </foorter>
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<IlikeinReact/>)
