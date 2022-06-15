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
            <CityContext.Provider value = {{city}}>

            <WeatherSearch setCity={setCity}/>

                {city.length
                ?<WeatherList/>
                : <div>Enter your city</div> }

            </CityContext.Provider>

        </div>
     );
}
 
export default WeatherApp;