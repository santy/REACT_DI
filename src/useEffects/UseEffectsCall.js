import { useState, useEffect, useCallback } from 'react';

function UseEffectsCall() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function updatePasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function validateEmail() {
    if (!enteredEmail.includes('@')) {
      console.log('Invalid email!');
    }
  }

  // const validateEmail = useCallback(  //se llama a la función cuando ha habido un cambio en el email 
  //   function () {
  //     if (!enteredEmail.includes('@')) {
  //       console.log('Invalid email!');
  //     }
  //   },
  //   [enteredEmail]
  // );

  useEffect(function () { //Se llama cada vez que se renderizamos tanto por el cambio de mail como de password
    validateEmail();
  }, [validateEmail]);

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
      <button>Save</button>
    </form>
  );

}

export default UseEffectsCall;