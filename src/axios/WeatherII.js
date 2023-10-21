import React, { useState } from 'react';
import axios from 'axios';
import './Weather';

const WeatherII = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);
  const [loading, setLoading] = useState(false);

  

  const submitForm = async e => {
    e.preventDefault();

    setLoading(true);
    console.log(loading); // true

    const apiKey = "52ce41f1c7f2c02e442089e0ebd36aea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const res = await axios.get(url);
      setTemp(res.data.main.temp);
    } catch (error) {
      console.log('Error message: ', error);
    } finally {
      setLoading(false);
    }

    console.log(loading); // false
  };

  return (
    <div className='page'>
      <div className='box'>
        <form onSubmit={submitForm} className='weather-form'>
          {loading && <p>Loading...</p>}
          <label htmlFor='city'>City name 2: </label>
          <input
            type='text'
            id='city'
            placeholder='Type a city'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button className='weather-button'>Get temperature</button>
        </form>
        <div className='temp'>{temp} &#8451;</div>
      </div>
    </div>
  );
};

export default WeatherII;