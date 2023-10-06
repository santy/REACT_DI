import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";


const FormRefEffect = () => {

    const inputRef = useRef("valor");
    const [value, setValue] = useState("");

    useEffect(
        () => {
            console.log(inputRef.current.value);

        }, [inputRef.current.value]
    )

    return (

        <div>
            <input
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            />

        </div>
    )


}


export default FormRefEffect;