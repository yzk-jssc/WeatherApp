import axios from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { weatherApi } from "../../API/WeatherService";
import { CityContext } from "../../context/CItyContext";
import { weatherDataInfo } from "../../types/weatherTypes";
import { monthes } from "./monthes";

interface WeatherItemProps {}

const WeatherItem: FunctionComponent<WeatherItemProps> = () => {
    const date = new Date();
    const day = date.getDate(),
        month = date.getMonth();

    const api = weatherApi;

    const { city } = useContext(CityContext);
    const [weather, setWeather] = useState<weatherDataInfo | null>(null);
    const [error, setError] = useState<boolean>(false);

    const getWeather = async () => {
        setError(false);

        try {
            await axios
                .get(
                    `${api.base}weather?q=${city}&units=metric&appid=${api.key}`
                )
                .then((res) => res.data)
                .then((res) =>
                    setWeather({
                        temp: res.main.temp,
                        feels_like: res.main.feels_like,
                        id: res.sys.id,
                        weatherState: res.weather[0].main,
                        name: res.name,
                    })
                );
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    if (error) {
        return <h1 className="city__wrong">Enter correct city please</h1>;
    }

    return (
        <div className="">
            <h1 className="city__current">{weather?.name}</h1>
            {weather && (
                <div className="weather__item .weather__item__style">
                    <div className="weather__date">
                        {day + ` ${monthes[month]}`}
                    </div>
                    <div className="weather__temp">
                        {"Now is " + Math.round(weather.temp) + " °C"}
                    </div>
                    <div className="weather__feelTemp">
                        {"feels like " + Math.round(weather.feels_like) + " °C"}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherItem;
