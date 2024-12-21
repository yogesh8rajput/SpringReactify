import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App2() {
  const [data, setData] = useState(null);  // Initialize data as null

  useEffect(() => {
    axios.get('http://localhost:8080/getAll')
      .then(response => {
        setData(response.data);  // Assuming response.data is an object like { id, name }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  


  return (
    <div>
      {/* <h1>{data.name}</h1>  */}
      {/* <p>ID: {data.id}</p>   */}
     {JSON.stringify(data)}  
    </div>
  );
}

export default App2;