import { useState } from 'react';
import './ColorStyle.css'
import classes from './ColorModuleStyle.module.css'

const ColorStyle = () => {

  
    

    const [priority, setPriority] = useState('low-prio')
    const [list, addlist] = useState(["T1", "T2"]);
    function chooseColor(event) {
        setPriority(event.target.value)
    }

    return(
        <div>
            <ul className={classes.alert} >Cabecera de Lista</ul>
            {list.map(element => 
                <li className={priority} key={element}>
                    {element}
                    <select onChange={chooseColor}>
                        <option value="low-prio">Low</option>
                        <option value="high-prio">High</option>
                    </select>    
                </li>
                
                
                )}
        </div>
    )
}

export default ColorStyle;