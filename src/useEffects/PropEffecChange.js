import { useEffect} from "react";


const PropEffecChange = ({ a, b}) => {

    useEffect(() => {
        console.log("value of 'a' changed to", a);
      }, [a]);

    return (
        
        <div>

            <p>I've got 2 props: a={a} and b={b}</p>

        </div>
        
        );
}

export default PropEffecChange;