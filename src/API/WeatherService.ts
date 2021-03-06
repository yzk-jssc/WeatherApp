import axios from "axios";
import { weatherDayData, } from "../types/weatherTypes";

export const weatherApi = {
    key: "8dde21dc2a313520410f0f77e2ad5dbe",
    base: "https://api.openweathermap.org/data/2.5/",
};

export const GetWeatherData = async (city:string,type:string) => {
    const api =`${weatherApi.base}${type}?q=${city}&units=metric&appid=${weatherApi.key}`
    
    
        const res = await axios
        .get<weatherDayData>(api)
        .then(res => res.data)
        
        return res
    
};

