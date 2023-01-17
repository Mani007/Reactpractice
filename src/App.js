
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'; //Always have components start with Capital letters
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setalert] = useState(null);
  
  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }
  
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      showAlert('This is dark mode','warning')
    } else {
      setMode('light')
      showAlert('This is light mode','success')
    }
  }
  return (
    <>
   
    <div className="container my-3">
     <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <TextForm headings="Text Area" mode={mode}/>
      {/* <About/> */}
      {/* <Navbar/> */}
    </div>
    
   </>
  );
}

export default App;
 