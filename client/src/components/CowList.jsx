import React from 'react';
import Cow from './Cow.jsx'

let CowList = (props) => {


  return (
    <thead>
      {props.cows.map(cow => {
        return (<Cow
          key={cow.id}
          name={cow.name}
          description={cow.description}
          deleteACow={props.deleteACow} />
        )
      })}
    </thead>
  )
}
export default CowList