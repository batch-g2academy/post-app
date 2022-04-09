import React from 'react'

export default function Button({title, handleOnClick}) {
  return (
    <button className="btn btn-primary m-3" onClick={handleOnClick}>{title}</button>
  )
}
