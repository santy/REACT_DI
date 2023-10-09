import { useState } from 'react';

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    function updateEmailHandler(event) {
      // could add email validation here
      setEmail(event.target.value);
    };
  
    function updateAgreementHandler(event) {
      setAgreed(event.target.checked); // checked is a default JS boolean property
    };

    function signupHandler(event) {
      event.preventDefault(); // prevent browser default of sending a Http request
      const userData = {userEmail: email, userAgrees: agreed};
      // doWhateverYouWant(userData);
    };
  
    return (
      <form onSubmit={signupHandler}>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" onChange={updateEmailHandler}/>
        </div>
        <div>
          <input type="checkbox" id="agree" onChange={updateAgreementHandler}/>
          <label htmlFor="agree">Agree to terms and conditions</label>
        </div>
      </form>
    );
  };

export default NewsletterSignup;