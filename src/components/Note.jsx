import React from 'react';
import {MdDeleteForever} from 'react-icons/md'; 

const Note = () => {
  return (
    <div className='note'>
        <span>Hello.First note.</span>
        <div className='note-footer'>
            <small>date</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note;