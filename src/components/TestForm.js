import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearclick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = " ";
        setText(newText)
    }
    const handleonChange = (event)=>{
        //console.log("onChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange= {handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearclick}> ClearText</button>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} charcters</p>
    </div>
    </>
  )
}
