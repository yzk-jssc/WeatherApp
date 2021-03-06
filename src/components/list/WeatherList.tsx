import React,{ ChangeEvent, FunctionComponent, useState } from "react";
import FiveDaysWeather from "../listItems/FiveDaysWeather";
import OneDayItem from "../listItems/OneDayWeatherItem";
import MySelect from "../UI/select/MySelect";
import './listStyles.css'

interface WeatherListProps {}

const WeatherList: FunctionComponent<WeatherListProps> = () => {


    const [weatherType, setWeatherType] = useState<string>('weather')
    const [error, setError] = useState<boolean>(false);
    
    const weatherChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        setWeatherType(e.target.value)
    }

    if (error) {
        return <h3 className="city__wrong">Enter correct city please</h3> ;
    }

    return (
        <div className="weather__info">
            <MySelect
            className='weather__select'
            defaulValue="Chose for 1 or 5 days"
            value={weatherType} 
            onChange={weatherChangeHandler}
            options={[
                {name:'For one day', value:'weather'},
                {name:'For five days', value:'forecast'}
            ]}/>
            
            {weatherType==='weather' &&(
                <OneDayItem  setError={setError} type={weatherType}/>
            )}
            
            {weatherType==='forecast' &&(
                <FiveDaysWeather setError={setError} type={weatherType}/>
            )}
        
        </div>
    );
};
export default WeatherList;