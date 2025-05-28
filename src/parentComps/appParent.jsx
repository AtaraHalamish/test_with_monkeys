import React, {useState} from 'react'
import Message from './message'

export default function AppParent() {
  
  let [show, setShow] = useState(true); // React.useState(true);

  const hideMessage = () => {
    setShow(false);
  }
  
    return (
    <div>
        <h1>App Parent Component</h1>
        
        { show && <Message onBtnHide={hideMessage}  txt="message1 from parent" /> }
        <Message txt="message2 from parent"  />
        
        test for github
        
    </div>
  )
}
