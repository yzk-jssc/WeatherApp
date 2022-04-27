import React, { useState } from "react";
import Mybutton from "./UI/Button/MyButton";
import Myinput from "./UI/Input/MyInput";

const Weathersearch = ({ getCity, ...props }) => {
    const [city, setCity] = useState('');
    const [value, setValue] = useState();
    

    const checkCity = (e) => {
        e.preventDefault();
        const cityFormat = city[0].toUpperCase() + city.slice(1)
        getCity(cityFormat);
        localStorage.setItem('cityNow', cityFormat)
        setValue('')
    };

    const inputFunc = (e) =>{
        setValue()
        e.preventDefault()
        setCity(e.target.value)
        //очистить инпут

    }

    return (
        <form 

            className = "weather__form" {...props} 
        >
            <Myinput
                type = 'text'
                value={value}
                placeholder="Enter your city"
                onChange={inputFunc}
            />
            <Mybutton onClick={checkCity}>{"Search"}</Mybutton>
        </form>
    );
};

export default Weathersearch;
