import React from 'react'

const WeatherData = (props) => {

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };


  return (
    <div className='weatherData'>
      <div className='currtemp'>
        <div className='tempAndLogo'>
        <div>
            <img src={`assets/${props.weather.icon}.svg`} width={200} alt='icon'/>
        </div>
        <div>
            {Math.round(props.weatherData.temp/10)}&deg;C
            <p>{props.weather.description}</p>
        </div>
        </div>
        <div className='windData'>
            <p>{'Wind: '}<span>{props.windData.speed}&nbsp;mph</span></p>
            <p>{'Min Temp: '}<span>{Math.round(props.weatherData.temp_min/10)}&deg;C</span></p>
            <p>{'Max Temp: '}<span>{Math.round(props.weatherData.temp_max/10)}&deg;C</span></p>
        </div>
      </div>
      <div id='scrolledItem' className='forcastdata'>
        <div>
            <p>{'SUNRISE'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg'} width={100} alt='icon'/>
            <p>{getTime(props.sunrise)}</p>
        </div>
        <div>
            <p>{'HUMIDITY'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.humidity}&nbsp;mm</p>
        </div>
        <div>
            <p>{'WIND'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg'} width={100} alt='icon'/>
            <p>{props.windData.speed}&nbsp;mph</p>
        </div>
        <div>
            <p>{'PRESURE'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.pressure}&nbsp;mb</p>
        </div>

        <div>
            <p>{'SUNSET'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'} width={100} alt='icon'/>
            <p>{getTime(props.sunset)}</p>
        </div>
      </div>
      
    </div>
  )
}

export default WeatherData
