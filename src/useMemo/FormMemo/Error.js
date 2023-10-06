import { memo } from 'react';

function Error({message}) {

    console.log('<Error /> component function is executed.');

    if (!message) {
  
      return null;
  
    }
  
    return <p >{message}</p>;
  
  }


  export default memo(Error);