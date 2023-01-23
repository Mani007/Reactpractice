import React, { useState } from "react";

export default function TextForm(props) {
  const clickHandler = () => {
    //console.log("Upper clicked" + text) // We can access the text value here and originally the react hook
    let newtext = text.toUpperCase(); // text variable is coming from the values of react hook
    setText(newtext);
  };

  const changeHandler = (event) => {
    //console.log("change clicked")
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your text here");
  // text = "new State"; // WRONG WAY TO CHANGE THE STATE
  // setText("New changes in text"); //This is the correct way

  return (
    <>
      <h1>{props.headings}</h1>
      <div className="container">
      <form>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            id="mybox"
            onChange={changeHandler}
            value={text}
            style={{backgroundColor: props.mode === 'light'?'white':'grey' }}
            placeholder="Type your text Here"
          />
        </div>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Convert to Upper Case
        </button>
      </form>
      </div>
      <br/>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words, {text.length} Characters</p>
      </div>
    </>
  );
}
