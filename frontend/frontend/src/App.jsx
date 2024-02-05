import './App.css';
import Heading from './atoms/Heading/Heading';
import Button from './atoms/button/Button';
import Dropdown from './atoms/dropdown/Dropdown';


function App() {
  return (
    <div className="App">
      <div className='bar'>
      
      <Dropdown/>
      <Button/>

      </div>
      <Heading className="big-heading"></Heading>
      <Heading className="small-heading"/>



    </div>
  );
}

export default App;
