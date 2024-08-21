import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <div>
        <p className='text-3xl text-pretty text-center text-amber-700'>This is a Child Component</p>
        <br/><br/>
        <GrandChild  user={user}/>
    </div>
  )
}

export default Child
