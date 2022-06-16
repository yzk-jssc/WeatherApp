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
import { cityDataInfo } from "../../types/CityTypes";
import { weatherFiveInfo } from "../../types/weatherTypes";
import { monthes } from "../list/monthes";

interface FiveDaysWeatherProps {
    setError: Dispatch<SetStateAction<boolean>>;
    type: string;
}

const FiveDaysWeather: FunctionComponent<FiveDaysWeatherProps> = ({
    setError,
    type,
}) => {

    const date = new Date();
    const day = date.getDate(),
        month = date.getMonth(); 

    const { city } = useContext(CityContext);
    type NewType = weatherFiveInfo[];

    const [weekWeather, setWeekWeather] = 
    useState<NewType | null>(null);
    const [cityInfo, setCityInfo] = useState<cityDataInfo | null>(null);
    

    

    let getDaysWeather =async (city: string, type: string) => {
        setError(false);
        setWeekWeather(null);
        try {

            const resData = await GetWeatherData(city,type);
            
            setWeekWeather(resData?.list.filter(dayTime=>dayTime.dt_txt.includes('15:00:00')));
            setCityInfo(resData.city);
        } catch (error) {

            setError(true);
        }

    };
    console.log(123);
    
    useEffect(() => {
        getDaysWeather(city, type);
        
    }, [city,type]);

    return (
        <>
            {weekWeather && (
                <div className="weather__about">
                    
                    {cityInfo && (
                        <h1 className="city__current">{cityInfo.name}</h1>
                    )}
                    <div className="weather__date">
                        <span className="week__days">{day}-{day+4} </span>
                        <span className="week__month">{monthes[month]}</span>
                    </div>
                    <div className="weather__list">
                        {weekWeather.map((weatherDay) => (
                            <div key={weatherDay.dt_txt} className="weather__item ">
                                <div className="weather__temp">
                                    {"Probably " +
                                        Math.round(weatherDay.main.temp) +
                                        " °C"}
                                </div>
                                <div className="weather__feelTemp">
                                    {"feels like " +
                                        Math.round(weatherDay.main.feels_like) +
                                        " °C"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            )}
        </>
    );
};

export default  FiveDaysWeather;
