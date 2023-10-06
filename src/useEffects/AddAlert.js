import { useState, useEffect } from 'react';
import Alert from './Alert';

const AddAlert = () => {

    const [showAlert, setShowAlert] = useState(false);

  function showAlertHandler() {

    setShowAlert((isShowing) => !isShowing);

  }

    return (
        <div>
            <button onClick={showAlertHandler}>
            {showAlert ? 'Hide' : 'Show'} Alert
            </button>
            {showAlert && <Alert />}
        </div>
    )

}


export default AddAlert;