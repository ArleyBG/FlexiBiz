import React from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";


export default function Button() {
  return (
    <button className="add-button" onClick={()=> alert("Acabas de clickearme")}>
      <FontAwesomeIcon icon={faCirclePlus} className='icono' />
    </button>
  )
}
