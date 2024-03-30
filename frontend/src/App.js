import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8800/alaa')
    .then(res =>res.json())
    .then(responseData => setData(responseData))
    .catch(err => console.log(err));
  },[])
  return (
    <div className="d-flex  vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <table className='table'>
        <thead>
          <tr>
            <th>id  </th>
            <th>name </th>
            <th>email </th>
            <th>password </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) =>(
            <tr key={i}>
              <td>{d.id}</td>
               <td>{d.name}</td>
               <td>{d.email}</td>
               <td>{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  )
}

export default App
