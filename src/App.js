import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';

function App() {



  
  return (
    <>
    <Navbar title="Text-Conversion" ></Navbar>
    <div className="container">
    <TextForm heading='Enter Text to Conversion'></TextForm>
    </div>


    <AboutUs/>
    </>
  );
}

export default App;
