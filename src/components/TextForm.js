import React, { useState } from 'react'
import '../App.css';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [size, setfontsize] = useState(10);

    const uper = () => {
        const newText = text.toUpperCase();
        setText(newText);
        if(text===''){
            props.showalert('Please write somthing:','failed');
        }
        else{
        props.showalert('Convert Text to UpperCase Successfuly','success');
        }
    }
    const lower = () => {
        const newText = text.toLocaleLowerCase();
        setText(newText);
        if(text===''){
            props.showalert('Please write somthing:','failed');
        }
        else{
        props.showalert('Convert Text to LoweCase Successfuly','success');
        }
    }
    const clear = () => {
        setText('');
        if(text===''){
            props.showalert('Please write somthing:','failed');
        }
        else{
        props.showalert('Clear text Successfuly','success');
        }
    }

    const onch = (event) => {
        setText(event.target.value);
    }

    const copy = () => {
        var copytext = document.getElementById("upr");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        if(text===''){
            props.showalert('Please write somthing:','failed');
        }
        else{
        props.showalert('Copy Text Successfuly','success');
        }
    }

    const handlespace = () => {
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        if(text===''){
            props.showalert('Please write somthing:','failed');
        }
        else{
        props.showalert('Remove Unnecessary Spaces Successfuly','success');
        }
    }

    const fontin = () => {

        if (size >= 50) {
            props.showalert('Already too big','failed');
          
        }
        else {
            const newsize = size + 2;
            setfontsize(newsize);
            console.log(newsize);
            props.showalert('Font size increase Successfuly','success');
            
        }


    }
    const fontde = () => {

        if (size <= 2) {
            props.showalert('Already too short','failed');
          
        }
        else {
            let newsize = size - 2;
            setfontsize(newsize);
            console.log(newsize);
            props.showalert('Font size decrease Successfuly','success');
          
        }
    }

    return (
        <>
            <h2 className='my-4' style={{color:props.mode==='dark'?'white':'black',textAlign:"center"}}>{props.heading}</h2>
            <div className="form-group mb-3">
                <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white'}} className="form-control formtext" onChange={onch} value={text} id="upr" rows="8"></textarea>
            </div>

            <div className="row my-1">
                <div className='col-sm-12 col-md-12 col-lg-3 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={uper}>Convert to UpperCase</button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={lower}>Convert to lowercase</button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={handlespace}>Remove Spaces</button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3 my-1'>
                    <button type="button" className="btn btn-info btn-block" onClick={copy}>Copy Text</button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3 my-1'>
                    <button type="button" className="btn btn-danger btn-block" onClick={clear}>Clear Text</button>
                </div>

                
            </div>

            <h2  style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
            <h4 className='my-3'style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter(Boolean).length} words & {text.length} characters</h4>
            <h2  style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
            <div className="row my-1">

                <h6  style={{color:props.mode==='dark'?'white':'black'}} className='my-3 mx-3'>Increase or Decrease Font Size</h6>
                <div className='col-sm-12 col-md-6 col-lg-6 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={fontin}>+</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 my-1'>
                    <button type="button" className="btn btn-primary btn-block" onClick={fontde}>-</button>
                </div>
            </div>
                <p style={{ fontSize: size, wordWrap:"break-word", color:props.mode==='dark'?'white':'black'}}>{text}</p>
                




        </>
    )
}
