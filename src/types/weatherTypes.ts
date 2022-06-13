
export interface weatherDataInfo{

    weatherState: string;
    // icon:?;
    temp:number;
    feels_like:number;
    id:number;    
    name:string

}

export interface weatherDataContext{
    weatherInfo:weatherDataInfo | null
}