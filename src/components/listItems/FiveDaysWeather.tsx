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
import { weekWeatherDataInfo } from "../../types/weatherTypes";
import { monthes } from "../list/monthes";

interface FiveDaysWeatherProps {
    setError: Dispatch<SetStateAction<boolean>>;
    type: string;
}

const FiveDaysWeather: FunctionComponent<FiveDaysWeatherProps> = ({
    setError,
    type,
}) => {

    const { city } = useContext(CityContext);
    const [weekWeather, setWeekWeather] = 
    useState<weekWeatherDataInfo[] | null>(null);

    const [cityInfo, setCityInfo] = useState<cityDataInfo | null>(null);

    const getDaysWeather = async (city: string, type: string) => {

        setError(false);
        setWeekWeather(null);
        try {
            const resData = await GetWeatherData(city, type);
            
            setWeekWeather(resData.list.slice(0,5));
            setCityInfo(resData.city);
        } catch (error) {

            setError(true);
        }
    };

    useEffect(() => {
        getDaysWeather(city, type);
    }, [city]);

    return (
        <>
            {weekWeather && (
                <div className="weather__about">
                    {cityInfo && (
                        <h1 className="city__current">{cityInfo.name}</h1>
                    )}
                    <div className="weather__list">
                        {weekWeather.map((weatherDay) => (
                            <div key={weatherDay.dt_txt} className="weather__item ">
                                {/* <div className="weather__date">
                                    {day}
                                </div> */}
                                <div className="weather__temp">
                                    {"Should be " +
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

export default FiveDaysWeather;
