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
          id={cow.id}
          deleteACow={props.deleteACow}
          handleSubmitEdit={props.handleSubmitEdit}
          showCow={props.showCow}/>
        )
      })}
    </thead>
  )
}
export default CowList