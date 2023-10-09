import { useState } from 'react';

function NewsletterField() {
    const [email, setEmail] = useState('');
     function changeEmailHandler(event) {
       setEmail(event.target.value);
     };
    function clearInputHandler() {
        setEmail(''); // reset email input (back to an empty string)
      };
  
    return (
        <>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={changeEmailHandler} />
          <label>{email}</label> 
          <button onClick={clearInputHandler}>Reset</button> 
        </>
      );
    };

export default NewsletterField;