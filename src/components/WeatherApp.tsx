import { FunctionComponent, useState } from "react";
import { CityContext } from "../context/CItyContext";
import WeatherItem from "./item/WeatherItem";
import WeatherSearch from "./search/WeatherSearch";

interface WeatherAppProps {
    
}
 
const WeatherApp: FunctionComponent<WeatherAppProps> = () => {

    const [city, setCity] = useState<string>('')
       


    return ( 
        <div className="weather__app">
            <CityContext.Provider value = {{city}}>

            <WeatherSearch setCity={setCity}/>

                <div className="weather__item__style">
                    <WeatherItem/>
                </div>

            </CityContext.Provider>

        </div>
     );
}
 
export default WeatherApp;