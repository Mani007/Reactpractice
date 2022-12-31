
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; //Always have components start with Capital letters
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Utility"/>
    <div className="container my-3">
      {/* <TextForm headings="Text Area"/> */}
      <About/>
    </div>
    {/* <Navbar/> */}
   </>
  );
}

export default App;
 