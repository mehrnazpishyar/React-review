import React from 'react'
import './fullComment.css'

const FullComment = ({commentId}) => {
  console.log(commentId)
  return (
    <div className='fullComment'>
        <p>name</p>
        <p>email</p>
        <p>body</p>
    </div>
  )
}

export default FullComment