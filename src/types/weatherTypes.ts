import { cityDataInfo } from "./CityTypes";

export interface weatherDayData {
    weatherState: string;
    // icon:?;
    temp: number;
    feels_like: number;
    id: number;
    name: string;
}

export interface weatherFiveInfo{
    weather: { weatherState: string };
    main: { temp: number; feels_like: number };
    dt_txt:string;
}

export interface weekWeatherDataInfo {
    list:weatherFiveInfo[]
   city:cityDataInfo;

}

export interface weatherDataList{
    list:weekWeatherDataInfo
}


export interface weatherOptions {
    value: string;
    name: string;
}

export type weatherGetData = weekWeatherDataInfo | weatherDayData