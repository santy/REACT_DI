function FormNoState() {
    let errorMessage = '';
    function evaluateEmail(event) {
        console.log('Hello');
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
            errorMessage = 'The entered email address is invalid.';
        } else {
            errorMessage = '';
    }
    };

    return (
    <div>
        <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
        <p>{errorMessage}</p>
    </div>
    );
};

export default FormNoState; 