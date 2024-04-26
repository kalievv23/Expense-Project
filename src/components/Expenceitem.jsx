import React from 'react'
import {Date} from './Date'

export const Expenceitem = (props) => {
  return (
    <div id='baza'>
        <h1>{props.title}</h1>
        <span>{props.price}</span>
        <Date date={props.date}/>
    </div>
  )
}

// export default Expenceitem