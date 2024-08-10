import React, { useEffect, useState } from 'react'

const UserDetails = () => {
    const [users, setUsers] = useState([]);

    const URL='https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
         const fetchdata = async() => {
            try {
                 const response = await fetch(URL);                 
                 const result = await response.json();                 
                 setUsers(result);
            } catch (error) {
                console.log(error);
            }
         }
         fetchdata();
    },[]);

  return (
    <div>
        
        <h1 className='text-center'>User Details</h1>

        <table className="table table-dark">
           <thead>
            <tr>
                <th scope='col'>S.No</th>
                <th scope='col'>Name</th>
                <th scope='col'>User Name</th>
                <th scope='col'>Email Id</th>
                <th scope='col'>Phone No</th>
            </tr>
           </thead>
           <tbody>
              { users.length > 0  && users.map((user) => 
                (<tr key={user.id} className='table-light'>
                    <td scope='row'>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>))
              }         
           
           </tbody>
        </table>
    </div>
  )
}

export default UserDetails