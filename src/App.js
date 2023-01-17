
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; //Always have components start with Capital letters
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  return (
    <>
   
    <div className="container my-3">
     <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
     <TextForm headings="Text Area"/>
      {/* <About/> */}
      {/* <Navbar/> */}
    </div>
    
   </>
  );
}

export default App;
 