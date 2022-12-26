import React, {useState} from 'react'


export default function TextForm(props) {
    const clickHandler = () => {
        //console.log("Upper clicked" + text) // We can access the text value here
        let newtext = text.toUpperCase(); // text variable is coming from the values of text area
        setText(newtext);
    }

    const changeHandler = (event) => {
        //console.log("change clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Your text here");
   // text = "new State"; // WRONG WAY TO CHANGE THE STATE
   // setText("New changes in text"); //This is the correct way
   
  return (
    <>
    <h1>{props.headings}</h1>
    <form>
  <div className="form-group">
    <textarea type="text" className="form-control" id="mybox" onChange={changeHandler} value={text} placeholder="Type your text Here"/>
  </div>
  <br/>
   <button type='button' className="btn btn-primary" onClick={clickHandler}>Convert to Upper Case</button>
</form>
    </>
  )
}
