import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getWheatherData } from '../redux/wheatherDataSlice';

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const dispatch = useDispatch()
  const { data, error, loading } = useSelector(state => state.wheather)

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        dispatch(getWheatherData({ lat, long }))
      });
    } else {
      alert("Unable to get Location permission");
    }
  }, [lat, long, dispatch]);

  return (
    <>
      {loading ? <span>Loading...</span> : 
        <>
          <div className="location">{data?.city}</div>
          {data?.info &&
            <div className="temp">
              <span>{data?.temp}</span>
              <span>&#8451;</span>
              <div className="description"><strong>{data?.info?.main}</strong>- {data?.info?.description}</div>
            </div>
          }
        </>
      }
    </>
  )
}

export default Weather