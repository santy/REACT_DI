import { useRef, useState } from 'react';

const CountersRef = () => {

const [counter1, setCounter1] = useState(0);
const counterRef1 = useRef(0);
const counterRef2 = useRef(0);
const counterRef = useRef(0);
let counter2 = 0;
function changeCountersHandler() {
  //setCounter1(1);
  counterRef1.current = 1;
  counter2 = 1;
  counterRef2.current = 1;
  };

  return (
  <>
    <button onClick={changeCountersHandler}>Change Counters</button>
    <ul>
      {/* <li>Counter 1: {counter1}</li>*/}
      <li>Counter 1: {counterRef1.current}</li>
      <li>Counter 2: {counter2}</li>
      <li>Counter 3: {counterRef2.current}</li>
    </ul>
  </>

  );
}

export default CountersRef;