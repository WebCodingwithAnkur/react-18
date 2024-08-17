import React, { useEffect, useState } from 'react'

const UpdateForm = ({user,onApiUpdate}) => {

   //const { name , email , phone} = user;

   const[name,setName] = useState(user.name || '');
   const[email,setEmail] = useState(user.email || '');
   const[phone,setPhone] = useState(user.phone || '');


   useEffect(() => {
    setName(user.name || '');
    setEmail(user.email || '');
    setPhone(user.phone || '');
   },[user]);

    const UpdateUser = () => {
       // call the api to update the data 
       const updateData = {
         "name":name,
         "email":email,
         "phone":phone
       } 

        // calling the api service
          try {
              fetch(`http://localhost:3000/users/${user.id}`,{
                method:'PUT',
                headers:{
                  'Accept':'application/json',
                  'Content-type':'application/json'
                },
                body:JSON.stringify(updateData)
              }).then((result) => 
                onApiUpdate()  // called the fetchData api when the update user  button click 

              );            
          } catch (error) {
             console.log(error);
          }
    }

  
    return (
    <div className='w-full flex justify-center items-center'>
      <div className='fixed top-50 flex flex-col shadow-lg items-center bg-amber-300 py-8 px-10 rounded-2xl'>
        <div className='flex flex-col justify-center text-fuchsia-500 text-3xl'>
          <p>Update Form</p> 
        </div>
        <div className='py-3 text-pretty mx-3 text-black'>
            <label>Name:</label><input type="text" name="name" value={name}   onChange={(e) => setName(e.target.value)} className='border-0 flex-auto py-1.5 pl-1 text-black rounded-xl'/>
        </div>
        <div className='py-3 text-pretty mx-3 text-black'>
            <label>Email:</label><input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-0 flex-auto py-1.5 pl-1 text-black rounded-xl'/>
        </div>
        <div className='py-3 text-pretty mx-3 text-black'>
            <label>Phone:</label><input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='border-0 flex-auto py-1.5 pl-1 text-black rounded-xl'/>
        </div>       
        <div>
          <button className='py-3 px-4 bg-indigo-600 text-white rounded-2xl'  onClick={UpdateUser}>Update User</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm
