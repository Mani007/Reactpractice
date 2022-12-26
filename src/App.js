
import './App.css';
import Navbar from './components/Navbar'; //Always have components start with Capital letters
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Utility"/>
    <div className="container">
      <TextForm headings="Text Area"/>
    </div>
    {/* <Navbar/> */}
   </>
  );
}

export default App;
 