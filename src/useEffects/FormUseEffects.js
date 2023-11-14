import { useState, useEffect, useCallback } from 'react';

function FormUseEffects() {
  const [isButtonDisabled, setButtonDisabled] = useState(true); 
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function updatePasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  const validateEmail = useCallback( //usando Callback se ejecuta useEffect siempre y cuando cambio enteredEmail y no cuando cambio el password
    function () {
      if (!enteredEmail.includes('@')) {
        console.log('Invalid email! Button disabled');
      }
      else {
        console.log('Valid email! Button enabled');
        setButtonDisabled(false);
      }
    },
    [enteredEmail]
  );

// function validateEmail() {
//     if (!enteredEmail.includes('@')) {
//         console.log('Invalid email!');
//        }
// }

  useEffect(
    function () {
      validateEmail();
    },
    [validateEmail]
  );

  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" onChange={updateEmailHandler} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" onChange={updatePasswordHandler} />
      </div>
      <button disabled={isButtonDisabled} >Save</button>
    </form>
  );
}

export default FormUseEffects;