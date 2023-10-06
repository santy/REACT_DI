import { useState } from 'react';

function EmailInput() {
  const [errorMessage, setErrorMessage] = useState({ fName: "", lName: "" });
  function evaluateEmail(event) {
    const enteredEmail = event.target.value;
    console.log(setErrorMessage);

    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorMessage('');
    } else {
      setErrorMessage('');
    }

  };

  return (
    <div>
      <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
      <p>{errorMessage}</p>
    </div>
  );

};

  export default EmailInput;