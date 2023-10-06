import { memo } from 'react';


const Sumar = ({Total}) => {

    
console.log("renderizado componente")

    return(
        <div>
            
            {Total}
        </div>
    )

}

export default memo(Sumar);