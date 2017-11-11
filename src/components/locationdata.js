import React from 'react';
import { getCelciusFromKelvin } from '../containers/utils';

const LocationData = props =>
  props.homeData.weather !== undefined ? (
    <div>
      <h4>Location Data</h4>
      <p>
        City: <strong>{props.homeData.name}</strong>
      </p>
      <p>
        Coordinates: Long <strong>{props.homeData.coord.lon} &deg;</strong> Lat <strong>{props.homeData.coord.lat} &deg;</strong>
        <strong />
      </p>
      <p>
        Temperature: <strong>{`${getCelciusFromKelvin(props.homeData.main.temp)}`}</strong> &#8451;
      </p>
      <p>
        Max Temp: <strong>{`${getCelciusFromKelvin(props.homeData.main.temp_max)}`}</strong> &#8451;
      </p>
      <p>
        Min Temp: <strong>{`${getCelciusFromKelvin(props.homeData.main.temp_min)}`}</strong> &#8451;
      </p>
      <p>
        Conditions: <strong>{props.homeData.weather[0].description}</strong>
        <img src={`http://openweathermap.org/img/w/${props.homeData.weather[0].icon}.png`} alt="weather icon" />
      </p>
      <p>
        Wind Speed: <strong>{props.homeData.wind.speed}</strong> meter/sec
      </p>
      <p>
        Wind Direction: <strong>{props.homeData.wind.deg}&deg;</strong>
      </p>
    </div>
  ) : (
    <div>Loading</div>
  );

export default LocationData;
