import React,{useState} from 'react';
//import Persons from './data'
import './App.css';

let nextId = 0;
function App() {
  
  const[persons,setPersons] = useState('');
   


  function handleName(e) {
    setPersons({ ...persons, name: e.target.value });
  }
  function handleDepartment(e) {
    setPersons({ ...persons, department: e.target.value });
  }
  function handleTelephone(e) {
    setPersons({ ...persons, telephone: e.target.value });
  }
 
  return (
    <>
      <div className='body'>
        <div className='cards'>
          <div className='boximage'>
            <img src={require('./image`/nkera.JPG')} alt="My fancy image"></img>
          </div>
          <div className='details'>
            <span className='header'>Person Details</span>
            <form className='form'>
              <label>Name:{persons.name}</label>
              <input type='text' value={persons.name} onChange={handleName} />
              <label>Department:{persons.department}</label>
              <input type='text' value={persons.department} onChange={handleDepartment} />
              <label>Telephone:{persons.telephone}</label>
              <input type='text' value={persons.telephone} onChange={handleTelephone} />
              
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
