import React, {useState} from 'react'


export default function TextForm(props) {
    const clickHandle = () => {
        console.log("Upper clicked")
    }

    const changeHandle = (event) => {
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
    <textarea type="text" className="form-control" id="mybox" onChange={changeHandle} value={text} placeholder="Type your text Here"/>
  </div>
  <br/>
   <button type="submit" className="btn btn-primary" onClick={clickHandle}>Convert to Upper Case</button>
</form>
    </>
  )
}
