import { useState } from 'react';

function LoginFormII() {
    const [userData, setUserData] = useState({
       email: '',
       password: ''
     });  
     function emailEnteredHandler(event) {
        setUserData(prevData => ({
          email: event.target.value,
          password: prevData.password
        }));
      };
      function passwordEnteredHandler(event) {
        setUserData(prevData => ({
           email: prevData.email,
           password: event.target.value
         }));
     };
  
     return (
        <form>
          <input
            type="email"
            placeholder="Your email"
            onBlur={emailEnteredHandler} />
          <input
            type="password"
            placeholder="Your password"
            onBlur={passwordEnteredHandler} />
         </form>
       );
};

export default LoginFormII;