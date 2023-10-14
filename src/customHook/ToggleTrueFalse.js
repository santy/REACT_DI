import { useState } from "react";
import ShowInfo from "./ShowInfo";

export function useActive(initialState) {
    const [active, setActive] = useState(initialState=false);

    const handleToggle = () => setActive(!active);
    const handleFalse = () => setActive(false);
    const handleTrue = () => setActive(true);

    return {
        active,
        handleToggle,
        handleFalse,
        handleTrue
    }

}



function ToggleTrueFalse() {

    const {active, handleToggle, handleFalse, handleTrue} = useActive();

    return(
        <div>
            <button onClick={handleToggle}>
                Toggle
            </button>
            <button onClick={handleTrue}>
                True
            </button>
            <button onClick={handleFalse}>
                False
            </button>
            {active.toString()}

            <ShowInfo />

            

        </div>
    );
}


export default ToggleTrueFalse;