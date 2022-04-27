import { useEffect, useState } from "react";
import "./Styles/App.css";
import Weatheritem from "./Components/WeatherItem";
import Weathersearch from "./Components/WeatherSearch";

const api = {
    key: "8dde21dc2a313520410f0f77e2ad5dbe",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    const [city, setCity] = useState(localStorage.getItem('cityNow') || '');
    const [weather, setWeather] = useState(null);
    const [cityCurrent, setCityCurrent] = useState('');
    /*список изменяющий интервал со списка,
    выбирать

    options
    */

    //forecast

    const getCity = (city) => {
        
        setCity(city);
    };


    const getWeather = async(city) => {
        await fetch(
            `${api.base}weather?q=${city}&units=metric&appid=${api.key}`
        )
            .then((res) => res.json())
            .then((data) => {
                if(data.cod === 200 && !Number(city)){
                    setWeather(data)
                    setCityCurrent(city)
                }else {
                    setCityCurrent('Enter correct city please')
                }
                
            });
    };


    useEffect(() => {
        getWeather(city)
        
    }, [city]); 

    return (
        <div className="App">   
                 
            <Weathersearch getCity={getCity} />

        <h1 className="city__current">{cityCurrent}</h1>

            <div className="weather__item__style">
                {
                    weather !== null &&
                    (
                        <Weatheritem 
                            temp={weather.main.temp}
                            feelTemp={weather.main.feels_like}
                            onClick={getWeather}
                            
                        />
                        
                    )
                }

            </div>
        </div>
    );
}

export default App;