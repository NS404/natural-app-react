import React,{useState} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import '../Welcome.css';

function Welcome() {
  const[currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='Welcome'>
    {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
  );
}

export default Welcome;