import React, { useEffect, useRef, useState } from 'react';
import searchIcon from '../assets/search.svg';
import WeatherData from './WeatherData';
import linkIcon from '../assets/external-link.svg';

const Main = () => {
  const inputValue = useRef();
  const [cityName, setCityName] = useState('Noida');
  const [error, setError] = useState(true);
  const [lang, setLang] = useState(true);
  const [myData, setMyData] = useState([]);
  const [cityDetails, setCityDetails] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [dataWeather, setDataWeather] = useState([]);
  const [windData, setWindData] = useState([]);
  const APP_KEY = '84be5a328fc5cd3aaad3c65581a2bf2f';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCityDetails(data);
        setMyData(data.main);
        setDataWeather(data.weather[0]);
        setWindData(data.wind);
        setSunrise(data.sys.sunrise);
        setSunset(data.sys.sunset);
        setError(true);
      } 
    catch (error) {
        setError(false);
      }
    };

    fetchData();
  }, [cityName]);

  const onKeydownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCityName(inputValue.current.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCityName(inputValue.current.value);
  };

  return (
    <div className='box'>
      <div className='cityName'>
        {error && cityDetails ? (
          <p>
            {cityDetails.name}, {cityDetails.sys && cityDetails.sys.country}
            <a href={`https://en.wikipedia.org/wiki/${cityDetails.name}`} target='_blank' rel='noopener noreferrer'>
              <img src={linkIcon} alt='link' />
            </a>
          </p>
        ) : (
          <p className='invalid'>{'Invalid City Name'}</p>
        )}
        <div className='search'>
          <input type='text' ref={inputValue} onKeyDown={onKeydownHandler} placeholder='City Name' />
          <img style={{ cursor: 'pointer' }} onClick={onSubmitHandler} src={searchIcon} alt='searchIcon' />
        </div>
      </div>
      <WeatherData weatherData={myData} weather={dataWeather} city={cityDetails} lang={lang} windData={windData} sunrise={sunrise} sunset={sunset} />
      {/* <p onClick={() => setLang(!lang)} className='translater'>{lang ? 'Hindi ?' : 'Eng ?'}</p> */}
    </div>
  );
};

export default Main;
