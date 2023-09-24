import React, { useState } from 'react'
import '../App.css';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const uper = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const lower = () => {
        const newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const clear = () => {
        setText('');
    }

    const onch = (event) => {
        setText(event.target.value);
    }

    return (

        <>
            <h2 className='my-2'>{props.heading}</h2>
            <div className="form-group mb-3">
                <textarea className="form-control formtext" onChange={onch} value={text} id="upr" rows="8"></textarea>
            </div>

            <div className="row my-1">
                <div className='col-sm-12 col-md-6 col-lg-4 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={uper}>Convert to UpperCase</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={lower}>Convert to lowercase</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 my-1'>
                    <button type="button" className="btn btn-danger btn-block" onClick={clear}>Clear Text</button>
                </div>
            </div>

            <h2>Your Text Summary</h2>
            <h4 className='my-3'>{text.split(/\s+/).filter(Boolean).length} words & {text.length} characters</h4>
            <h2>Preview</h2>
            <p>{text}</p>


        </>
    )
}
