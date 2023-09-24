import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text-Conversion" ></Navbar>
    <div className="container">
    <TextForm heading='Enter Text to Conversion'></TextForm>
    </div>
    </>
  );
}

export default App;
