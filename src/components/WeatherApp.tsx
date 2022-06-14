import { FunctionComponent, useState } from "react";
import { CityContext } from "../context/CItyContext";
import WeatherList from "./list/WeatherList";
import WeatherSearch from "./search/WeatherSearch";

interface WeatherAppProps {
    
}
 
const WeatherApp: FunctionComponent<WeatherAppProps> = () => {

    const [city, setCity] = useState<string>('moscow')
    
    return ( 
        <div className="weather__app">
            <CityContext.Provider value = {{city}}>

            <WeatherSearch setCity={setCity}/>

                    <WeatherList/>

            </CityContext.Provider>

        </div>
     );
}
 
export default WeatherApp;