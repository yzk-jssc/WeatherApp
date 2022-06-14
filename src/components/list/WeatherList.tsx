import React,{ ChangeEvent, FunctionComponent, useState } from "react";
import { weekWeatherDataInfo } from "../../types/weatherTypes";
import FiveDaysWeather from "../listItems/FiveDaysWeather";
import OneDayItem from "../listItems/OneDayWeatherItem";
import MySelect from "../UI/select/MySelect";

interface WeatherListProps {}

const WeatherList: FunctionComponent<WeatherListProps> = () => {


    const [weatherType, setWeatherType] = useState<string>('weather')
    const [error, setError] = useState<boolean>(false);


    
    const weatherChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        setWeatherType(e.target.value)
    }

    if (error) {
        return <h1 className="city__wrong">Enter correct city please</h1> ;
    }


    return (
        <div className="weather__info">
            <MySelect
            defaulValue="Chose for 1 or 5 days"
            value={weatherType} 
            onChange={weatherChangeHandler}
            options={[
                {name:'For one day', value:'weather'},
                {name:'For five days', value:'forecast'}
            ]}/>
            
            {weatherType==='weather' &&(
                <OneDayItem setError={setError} type={weatherType}/>
            )}
            
            {weatherType==='forecast' &&(
                <FiveDaysWeather setError={setError} type={weatherType}/>
            )}
        
        </div>
    );
};
export default WeatherList;
