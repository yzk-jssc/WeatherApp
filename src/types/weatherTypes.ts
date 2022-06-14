export interface weatherDayData {
    weatherState: string;
    // icon:?;
    temp: number;
    feels_like: number;
    id: number;
    name: string;
}

export interface weekWeatherDataInfo {
    weather: { weatherState: string };
    main: { temp: number; feels_like: number };
    dt_txt:string
}

export interface weatherOptions {
    value: string;
    name: string;
}
