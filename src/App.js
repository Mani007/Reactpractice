
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; //Always have components start with Capital letters
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   
    <div className="container my-3">
     <Navbar title="Text Utility"/>
     <TextForm headings="Text Area"/>
      <About/>
      {/* <Navbar/> */}
    </div>
    
   </>
  );
}

export default App;
 