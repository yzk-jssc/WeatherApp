import React, { ChangeEvent, FunctionComponent } from "react";
import { weatherOptions } from "../../../types/weatherTypes";

interface MySelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    className?:string;
    options:weatherOptions[];
    defaulValue:string;
    value:string;
    onChange: (e:ChangeEvent<HTMLSelectElement>)=>void;
}
 
const MySelect: FunctionComponent<MySelectProps> = ({className,options, defaulValue,value,onChange}) => {
    return (
        <select
            className={className}
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