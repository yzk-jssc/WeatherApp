import React, { ChangeEvent, FunctionComponent, SelectHTMLAttributes } from "react";
import { weatherOptions } from "../../../types/weatherTypes";

interface MySelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    options:weatherOptions[];
    defaulValue:string;
    value:string;
    onChange: (e:ChangeEvent<HTMLSelectElement>)=>void;
}
 
const MySelect: FunctionComponent<MySelectProps> = ({options, defaulValue,value,onChange}) => {
    return (
        <select
            value={value}
            onChange={onChange}
        >
            <option disabled>
                {defaulValue}
            </option>
            {options.map(option=>
                (<option value={option.value} key={option.value} >{option.name}</option>)
            )}

            
        </select> 
    );
}
 
export default MySelect;