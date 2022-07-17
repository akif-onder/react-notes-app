import React from 'react'

const Header = ({handleToggleMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={()=>handleToggleMode((dark)=>!dark)} className='save'>Toggle Mode</button>
    </div>
  )
}

export default Header;