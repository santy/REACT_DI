import { useActive } from "./ToggleTrueFalse";

function ShowInfo() {

    const {active, handleToggle} = useActive(false);
    return(
        <div>
            <div>
                <button onClick={() => handleToggle()}>
                    show/hide
                </button>
            </div>
            {
                active && (
                    <div>
                    <h1>User Info</h1>
                    </div>
                )
            }
        </div>
    )
}

export default ShowInfo;

