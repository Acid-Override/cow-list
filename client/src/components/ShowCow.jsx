import React from 'react'

let ShowCow = (props) => {
  console.log('ShowCow', props)


  return (
    <div>
      <h2>{props.showcow}</h2>
      <h3>{props.description}</h3>
    </div>
  )
}
export default ShowCow