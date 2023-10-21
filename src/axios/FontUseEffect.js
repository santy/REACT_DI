import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyCtp_MK8H4zWBobZfnWILWrQZlUy6MpfUw';

const FontUseEffect = props => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const getFonts = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${props.sort}`
      );
      setFonts(res.data.items.slice(0, 10));
    };
    getFonts(); //Evita el bucle infinito
  }, [props.sort]);

  return (
    <div className='card'>
      {fonts.map((font, index) => (
        <a href={`https://fonts.google.com/specimen/${font.family.replace(' ', '+')}`} className='card__item' key={index}>
          {font.family}
        </a>
      ))}
    </div>
  );
};

export default FontUseEffect;