import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
  return (
    <div>
        <p className='text-4xl text-pretty text-center text-fuchsia-700'>This is a Parent Component</p>
        <br/><br/>
        <Child  user={user} />
    </div>
  )
}

export default Parent
