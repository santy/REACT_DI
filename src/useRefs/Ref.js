import { useRef } from 'react';

const Ref = () => {

    const emailRef = useRef();
    function submitFormHandler(event) {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;}
  
    // could send enteredEmail to a backend server

    return (
        <div>
            <form  onSubmit={submitFormHandler}>
                <label htmlFor="email">Your email</label>
                <input ref={emailRef} type="email" id="email"/>
                <button>Save</button>
            </form>
        </div>
    );
}

export default Ref;