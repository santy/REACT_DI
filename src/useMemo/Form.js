import Error from './Error';
import ErrorNoMemo from './Error';
import { useState, useCallback} from 'react';

function Form() {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    function updateEmailHandler(event) {
        setEnteredEmail(event.target.value);
      }
  
    function submitHandler(event) {
        event.preventDefault();
        if (!enteredEmail.endsWith('.com')) {
          setErrorMessage('Email must end with .com.');
        }
      }
  
      // function clearErrorHandler() {

      //   setErrorMessage(null);
    
      // }
    
        const clearErrorHandler = useCallback(() => {

            setErrorMessage(null);
          
          }, []);
      
  
    return (

        <div>
          <input onChange={submitHandler} />

        <form  onSubmit={submitHandler}>
          <div >
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={enteredEmail}
              onChange={updateEmailHandler}
              
            />
          </div>
          <Error message={errorMessage} onClearError={clearErrorHandler} />
          {/* <ErrorNoMemo message={errorMessage}/> */}
          <button>Sign Up</button>
        </form>
        </div>
    );
  
  }

  export default Form;