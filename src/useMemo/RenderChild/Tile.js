import { useRef } from "react";
import Updates from './Updates';


const Tile = () => {
    let eventUpdates = useRef(0);
    return (
      <div className="black-tile">
        <Updates updates={eventUpdates.current++} />
      </div>
    );
  }
  

  export default Tile;