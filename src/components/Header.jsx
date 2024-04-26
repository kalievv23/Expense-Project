import React from 'react'

export const Header = (props) => {
  return (
    <div className='header'>
      <h1>LOGO</h1>
      <button onClick={props.onShowFormHandler}>ADD PRODUCTS</button>
    </div>
  )
}

// export default Header