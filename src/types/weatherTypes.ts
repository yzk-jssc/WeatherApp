import { cityDataInfo } from "./CityTypes";

export interface weatherDayData extends weatherFiveData{
    weather: { main: string };
    main: { temp: number; feels_like: number };
    name:string;
    sys?:{id:string}
}

export interface weatherDayInfo{
    weather: { main: string };
    main: { temp: number; feels_like: number };
    name:string;

}

export interface weatherFiveData {
    list:weatherFiveInfo[]
    city:cityDataInfo;

}

export interface weatherFiveInfo{
    weather: { main: string };
    main: { temp: number; feels_like: number };
    dt_txt:string;
}

export interface weatherDataList{
    list:weatherFiveData
}


export interface weatherOptions {
    value: string;
    name: string;
}

export type weatherGetData = weatherFiveData | weatherDayData