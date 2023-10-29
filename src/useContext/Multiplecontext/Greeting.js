import React from 'react';
import { CurrentUserContext } from './MultipleContext';
import { useContext } from 'react';

function Greeting() {
const {currentUser} = useContext(CurrentUserContext);
  return (
    <div>You logged in as {currentUser.name}.</div>
  )
}

export default Greeting