import { useState, useEffect, useRef } from "react"; 
import Tile from "./RenderChild/Tile";
import TileMemo from "./RenderChild/TileMemo";
import Updates from "./RenderChild/Updates";


const RenderChild = () => {  
    const updates = useRef(0);
    const [text, setText] = useState('');
  
    useEffect(() => {
      updates.current++;
    });
  
    return (
      <div className="app">
        <div className="blue-wrapper">
          <input value={text} placeholder="Write something" onChange={(e) => setText(e.target.value)} />
          <Updates updates={updates.current} />
          <br />
          <Tile />
          <TileMemo />
        </div>
      </div>
    );
  };
  
export default RenderChild;