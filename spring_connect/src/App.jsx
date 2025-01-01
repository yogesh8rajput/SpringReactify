import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employee, setEmployee] = useState([]); 
   // Initialize an empty array to store names
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:8081/getAll')  // Replace with your API endpoint
      .then(response => {
        // Extract only the 'e_name' from each object in the array
        const extractedemp = response.data.map(item => ({
            id: item.e_id,
            ename:item.e_name
        }));
      
        setEmployee(extractedemp);  // Set the names to the state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  // Display loading or error message
  if (loading) {
    return <div>Loading...........</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Employee Names</h1>
      <ul>
        {/* Render each name in a list */}
        {employee.map((employee, index) => (
          <li key={index}> {employee.id} : {employee.ename} </li>
        ))}
         
      </ul>
    </div>
  );
}

export default App;
