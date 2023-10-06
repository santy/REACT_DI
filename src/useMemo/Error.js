import { memo } from 'react';


function Error({ message, onClearError }) {
  console.log('<Error /> component function is executed.');
  if (!message) {
    return null;
  }

  return (
    <div >
      <p>{message}</p>
      <button  onClick={onClearError}>X</button>
    </div>

  );
}

export default memo(Error); //memo por si solo no funciona es necesario añadir callbacks