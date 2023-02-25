import React,{useState} from 'react';
//import Persons from './data'
import './App.css';

let nextId = 0;
function App() {
  const [index, setIndex] = useState();
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
  //let persons = person[index];
  return (
    <>
      <div className='body'>
        <div className='cards'>
          <div className='boximage'>
            <img src='./image/nkera.JPG'  alt='' />
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
              <button onClick={() => {
                setPersons('');
                index.push({id:nextId++,persons:persons.name,})
                }}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
