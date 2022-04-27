import React from "react";

const Weatheritem = ({ temp, feelTemp }) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const monthes = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    return (
        <div className="weather__item">
            <div className="weather__date">{day + ` ${monthes[month]}`}</div>
            <div className="weather__temp">{'Now is ' + Math.round(temp) + " °C"}</div>
            <div className="weather__feelTemp">
                {'feels like '+ Math.round(feelTemp) + " °C"}
            </div>
        </div>
    );
};

export default Weatheritem;
/*
    день

    значок
    погода

    как ощущается маленьким текстом
 */
