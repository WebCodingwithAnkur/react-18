import React from 'react'

const GrandChild = ({user}) => {
  return (
    <div>
         <p className='text-xl text-pretty text-center text-pink-700'>This is a Grand Child</p>
         <br/><br/>
         <h3 className='text-xl text-pretty text-center text-pink-900'>User Details</h3>
         <p className='text-md text-pretty'>Name:{user.name}</p>
         <p className='text-md text-pretty'>Age :{user.age}</p>
    </div>
  )
}

export default GrandChild
