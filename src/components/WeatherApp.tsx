import { FunctionComponent, useState } from "react";
import { CityContext } from "../context/CItyContext";
import WeatherList from "./list/WeatherList";
import WeatherSearch from "./search/WeatherSearch";

interface WeatherAppProps {
    
}
 
const WeatherApp: FunctionComponent<WeatherAppProps> = () => {

    const [city, setCity] = useState<string>('')

    
    return ( 
        <div className="weather__app">
            <h1 >Weather widget</h1>
            <CityContext.Provider value = {{city}}>
            <div className="weather__input">
                <WeatherSearch setCity={setCity}/>

            </div>

                {city.length
                ?<WeatherList/>
                : <h3>Enter your city</h3> }

            </CityContext.Provider>

        </div>
     );
}
 
export default WeatherApp;