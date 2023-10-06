import { memo, useRef } from 'react';
import Updates from './Updates';

const TileMemo = memo(() => {
    let updates = useRef(0);
    return (
      <div className="black-tile">
        <Updates updates={updates.current++} />
      </div>
    );
  });


  export default TileMemo;