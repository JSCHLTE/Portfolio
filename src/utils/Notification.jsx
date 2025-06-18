import React from 'react'

const Notification = ({ type, message, desc }) => {

    const types = {
        sucess: "circle-check",
        failed: "circle-xmark",
        warning: "triangle-exclamation",
    }

  return (
    <>
        {type ? 
        <div className={`notification-desc ${type}`}>
            <div className='notification-title'>
                <i class={`fa-solid fa-${types.type}`}></i><span>{message}</span>
            </div>
            <div className='notification-desc'>
                <p>{desc}</p>
            </div>
        </div> : ''}
    </>
  )
}

export default Notification