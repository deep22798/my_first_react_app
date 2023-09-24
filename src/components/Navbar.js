import React,{useState} from 'react'


export default function Navbar(props) {

  const [mystyle, setMystyle] = useState({
    color:'dark',
    backgroundColor:'white',
    text:'dark'
  });

  const switchh = () => {
    if(mystyle.color=='white'){
      setMystyle({
        color:'black',
        backgroundColor:'white',
        text:'dark'
      });
    }
    else{
      setMystyle({
        color:'white',
        backgroundColor:'black',
        text:'light'
      })
    }
}

  return (
    <nav className="navbar navbar-expand-lg"  style={{backgroundColor:mystyle.backgroundColor}}>
    <a className="navbar-brand" href ="/" style={{color:mystyle.color}}>{props.title}</a>


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/" style={{color:mystyle.color}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{color:mystyle.color}}>About</a>
        </li>
      </ul>
      
    <button type="button" onClick={switchh} className={"btn text-left btn-"+mystyle.text}>Switch to {mystyle.text} </button>
    </div>
  </nav>
  )
}
