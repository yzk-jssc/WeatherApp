import { createContext } from "react";
import { weatherDataContext } from "../types/weatherTypes";

const weatherDefaultState:weatherDataContext = {
    weatherInfo:null
}

export const WeatherContext = createContext(weatherDefaultState)