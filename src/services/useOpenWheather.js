import { useState, useReducer, useEffect } from 'react'
import axios from "axios";
import {apiConstant} from  '../constants/apiConstant';

const initialState = {
    data: null,
    errorMessage: null,
};

export const fetchReducer = (state, { type, payload }) => {
    switch (type) {
        case apiConstant.SUCCESS:
            return {
            data: payload,
            errorMessage: null,
            };
        case apiConstant.FAILURE:
            return { data: null, errorMessage: payload };
        default:
            return state;
    }
};

const useOpenWheather = (config) => {
    const { key, city, exclude, units } = config;
    const [locationInfo, setLocationInfo] = useState({});
    const [coordinates, setCoordinates] = useState({});
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    const { data, errorMessage } = state;

    const getCoordinatesOfAddress = async(city) => {
        try {
            const response = await axios.get(
                apiConstant.COR_END_POINT,
                {
                    params: {
                        q: city,
                        appid:key,
                    }
                }
            );
            return response;
        } catch (error) {
            dispatch({ type: apiConstant.FAILURE, payload: error.message || error });
        }
    }
    
    useEffect(() => {
        if (city === "") return;
          getCoordinatesOfAddress(city)
          .then((res) => {
            if (res.data.length !== 0 && res.data !== undefined) {
                if (res.data[0].city === undefined &&
                    res.data[0].state === undefined) {
                    return;
                }
            } else {
                dispatch({ type: apiConstant.FAILURE, payload: 'Invalid city' });
            }
            
            setCoordinates({
                lat: res.data[0].lat,
                lng: res.data[0].lon
            })
            setLocationInfo({
                city: res.data[0].name,
                state: res.data[0].state,
                country: res.data[0].country
            });
          })
    }, [city]);

    const getWeatherAndForecast = async(coordinates, units) => {
        try {
            const response = await axios.get(
                apiConstant.WF_END_POINT,
                {
                    params: {
                        lat: coordinates.lat,
                        lon: coordinates.lng,
                        exclude: exclude,
                        appid: key,
                        units: units
                    }
                }
            );
            dispatch({
                type: apiConstant.SUCCESS,
                payload: response,
            });
        } catch (error) {
            dispatch({ type: apiConstant.FAILURE, payload: error.message || error });
        }
    }

    useEffect(() => {
        if (Object.keys(coordinates).length === 0) return;
        getWeatherAndForecast(coordinates, units);
    }, [coordinates, units]);
    return { data, errorMessage, locationInfo };
}

export default useOpenWheather;