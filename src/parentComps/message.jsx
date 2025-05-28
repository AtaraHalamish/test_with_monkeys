import React from 'react'

function Message(props) {
  return (
    <div className='w-50 p-3 h3 bg-warning text-center'>
        Message: {props.txt}
        <button 
        className='float-end' 
        onClick={ () => {
            // if (props.onBtnHide) {
            //     props.onBtnHide();
            // } else {
            //     console.log("No onBtnHide function provided");
            // }
            props.onBtnHide && props.onBtnHide(); // if onBtnHide is defined, call it
        }
        }> X Close   </button> 

        </div>
  )
}

export default Message