import { useState, useEffect } from 'react';

function Alert2() {

    const [alertMsg, setAlertMsg] = useState('Expired!');
    
    function changeAlertMsgHandler(event) {
      setAlertMsg(event.target.value);
  
    }

  function setAlert() {
    setTimeout(function () {
      console.log(alertMsg);
    }, 2000);
  }

  useEffect(
    function () {
      setAlert();
    },
    [setAlert]
  );

  return (
    <div>
        <input type="text" onChange={changeAlertMsgHandler} />
    </div>
  )
}

export default Alert2;