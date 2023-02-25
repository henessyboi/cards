import React,{ useState } from 'react'
 
let nextId = 0;

const App = () => {
  const [name,setName] = useState('');
  const [index,setIndex] = useState([]);
  //const[kevin,setKevin] = useState();
  
  return (
    <div>
      <h1>Enter object</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() =>{
        setName('');
        index.push({
          id:nextId++,
          name:name,
        })
      }}
       
      >Add</button>
      <span>
       <ul>
          {index.map(index =>(
          <li key={index.id}>{index.name}
          <button onClick={() =>{
            setName(name.filter(n => n.id !== name.id));
          }}>Delete</button>
          </li>
          
        ))}
       </ul>
       
        </span> 
    </div>
    
  )
}

export default App