import React, {useState} from "react";


const TextForm = (props) => {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);


    const change = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(/\s+/).filter((word) => word.length !== 0);
    setWordCount(words.length);
    setCharCount(inputText.trim().length);
    }


    const Upper = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppedcase", "Success");
    } 

    const Lower = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "Success");
    }

    const Speak = () => {
        let voice = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(voice);
    }

    const Space = () => {
        let space = text.split(" ").filter(word => word).join(" ");
        setText(space);
        props.showAlert("Removed The Extra spaces", "Succuss");
    }

    const Copy = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Copied The Text", "Success");
        }, () => {
            props.showAlert("Failed to copy the Text", "Failed");
        })
    }

    const Clear = () => {
        setText("");
        props.showAlert("Cleared The Text", "Success");
    }

    return (
        <div className='container my-3'>
        <h1 className='text-center'>Type your Text here and Analyze them</h1>
        <div className="mb-3 my-4">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Enter your Text' value={text} onChange={change}></textarea>
        </div>
        <div className='text-center'>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Upper}>Uppercase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Lower}>Lowercase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Speak}>Text to Speech</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Space}>Remove Extra Spaces</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Copy}>Copy Text</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === 'dark' ? 'light' : "primary"} mx-1 my-1`} onClick={Clear}>Clear Text</button>
        </div>
        <div>
          <h2>Word Summary</h2>
          <p>No of Words: <b>{wordCount}</b> and No of Characters: <b>{charCount}</b></p>
          <p>Minutes required to Read : <b>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length}</b></p>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Nothing" : text}</p>
        </div>
      </div>
    )
};

export default TextForm;
