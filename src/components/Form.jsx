import React, {useState} from 'react'

export const Form = (props) => {

  const [title,setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [date,setDate] = useState("")


  const titleHandler = (event)=>{
    setTitle(event.target.value)
  }
  
  
  const priceHandler = (e)=>{
    setPrice(e.target.value)
  }
  const dateHandler = (e)=>{
    setDate(e.target.value)
  }


  const addHandler=()=>{
    const exp = {
      title:title,
      price:price,
      id: Math.random(),
      date: new Date(date)
    }
    props.onSave(exp)
  }

  return (
    <div>
        <input onChange={titleHandler} type="text" />
        <input onChange={priceHandler} type="text" />
        <input onChange={dateHandler} type="date" />
        <button onClick={addHandler}>ADD</button>
        <button onClick={props.onCloseFormHandler}>Cancel</button>


    </div>
  )
}

export default Form