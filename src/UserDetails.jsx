import React, { useEffect, useState } from 'react'
import UpdateForm from './UpdateForm';

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  const[user,setUser]= useState([]);

  
  //const URL='https://jsonplaceholder.typicode.com/users';
  const URL = 'http://localhost:3000/users';

  useEffect(() => {
    fetchdata();
  }, []);


  const fetchdata = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  }


  const DeleteItem = (userId) => {
    try {
      fetch(URL + `/${userId}`, {
        method: 'DELETE',
      }).then((result) =>
        result.json().then((response) => {
          console.log(response);
          fetchdata();
        })
      )
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async (id) => {
      try {
          const response = await fetch(URL+`/${id}`);
          const resp = await response.json();          
          setUser(resp);
      } catch (error) {
        console.log(error);
      }
  }




  

  return (
    <div>
      <h1 className='text-center'>User Details</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope='col'>S.No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email Id</th>
            <th scope='col'>Phone No</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 && users.map((user) =>
            (<tr key={user.id} className='table-light'>
              <td scope='row'>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>              
              <button type="button" onClick={(e) => getUser(user.id)} className='bg-cyan-400 text-black px-5 py-2.5 font-medium rounded-xl'>Update</button>
              &nbsp;&nbsp;
              <button type="button" onClick={(e) => DeleteItem(user.id)} className='bg-red-700 text-white px-5 py-2.5 font-medium rounded-xl'>Delete</button></td>
            </tr>))
          }
        </tbody>
      </table>      
      <br/><br/>
      <UpdateForm  user={user}  onApiUpdate={fetchdata}/>
    </div>
  )
}

export default UserDetails