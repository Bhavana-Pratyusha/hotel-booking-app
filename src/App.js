import './App.css';
import {SignUp} from './SignUp';
import {Routes,Route} from 'react-router-dom';
import {Login} from './Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/SignUp' element = {<SignUp />} />
        <Route path='/Login' element = {<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;


