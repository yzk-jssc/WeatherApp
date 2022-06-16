import React from "react";
import {
    Dispatch,
    FunctionComponent,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { GetWeatherData } from "../../API/WeatherService";
import { CityContext } from "../../context/CItyContext";
import { weatherDayInfo } from "../../types/weatherTypes";
import { monthes } from "../list/monthes";
import './daysWeather.css'

interface OneDayItemProps {
    setError: Dispatch<SetStateAction<boolean>>;
    type: string;
}

const OneDayItem: FunctionComponent<OneDayItemProps> = ({ setError, type, }) => {
    const date = new Date();
    const day = date.getDate(),
        month = date.getMonth();

    const { city } = useContext(CityContext);
    const [dayWeather, setDayWeather] = useState<weatherDayInfo | null>(null);



    const getDayWeather = async (city: string, type: string) => {
        setError(false);
        setDayWeather(null);
        try {
            const resData = await GetWeatherData(city, type);
            
            setDayWeather({
                weather: {
                    main:resData.weather?.main
                },
                main:{
                    temp:resData.main.temp,
                    feels_like:resData.main.feels_like
                },
                name:resData.name
            });
        } catch (error) {
            console.log(error);

            setError(true);
        }
    };

    useEffect(() => {
        getDayWeather(city, type);

    }, [city,type]);

    return (
        <>
             <h1 className="city__current">{dayWeather?.name}</h1>

            <div className="weather__item__style">
            {dayWeather && (
                
                <div className="weather__item ">
                    <div className="weather__date">
                        {day + ` ${monthes[month]}`}
                    </div>
                    <div className="weather__temp">
                        {"Today will be " + Math.round(dayWeather.main.temp) + " °C"} 
                    </div>
                    <div className="weather__feelTemp">
                        {"feels like " +
                            Math.round(dayWeather.main.feels_like) +
                            " °C"}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default OneDayItem;


