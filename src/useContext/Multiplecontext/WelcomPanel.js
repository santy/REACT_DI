import React from 'react';
import { CurrentUserContext } from './MultipleContext';
import { useContext } from 'react';
import Panel from './Panel';
import Greeting from './Greeting';
import LoginForm from './LoginForm';



function WelcomPanel({ children }) {
const {currentUser} = useContext(CurrentUserContext);

  return (
    <div>
        <Panel title="Welcome">
         {currentUser !== null ? <Greeting /> : <LoginForm />}
        </Panel></div>
  )
}

export default WelcomPanel