import {
    Dispatch,
    FunctionComponent,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { GetDayWeatherData } from "../../API/WeatherDayService";
import { CityContext } from "../../context/CItyContext";
import { weatherDayData } from "../../types/weatherTypes";
import { monthes } from "../list/monthes";

interface OneDayItemProps {
    setError: Dispatch<SetStateAction<boolean>>;
    type: string;
}

const OneDayItem: FunctionComponent<OneDayItemProps> = ({ setError, type }) => {
    const date = new Date();
    const day = date.getDate(),
        month = date.getMonth();

    const { city } = useContext(CityContext);
    const [dayWeather, setDayWeather] = useState<weatherDayData | null>(null);
    const getDayWeather = async (city: string, type: string) => {
        setError(false);
        setDayWeather(null);
        try {
            const resData = await GetDayWeatherData(city, type);
            setDayWeather({
                temp: resData.main.temp,
                feels_like: resData.main.feels_like,
                id: resData.sys.id,
                weatherState: resData.weather[0].main,
                name: resData.name,
            });
            
        } catch (error) {
            console.log(error);

            setError(true);
        }
    };

    useEffect(() => {
        getDayWeather(city, type);
    }, [city]);

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
                        {"Now is " + Math.round(dayWeather.temp) + " °C"}
                    </div>
                    <div className="weather__feelTemp">
                        {"feels like " +
                            Math.round(dayWeather.feels_like) +
                            " °C"}
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default OneDayItem;
