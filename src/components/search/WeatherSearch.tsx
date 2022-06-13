import { ChangeEvent, FunctionComponent, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import classes from './search.module.css'

interface WeatherSearchProps {
    setCity:React.Dispatch<React.SetStateAction<string>>
}
 
const WeatherSearch: FunctionComponent<WeatherSearchProps> = ({setCity}) => {

    const [value, setValue] = useState<string>('')

    const cityHandleSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setCity(value)
        setValue('')
    }

    return (
        <form onSubmit={cityHandleSubmit} className={classes.w_form}>

            <MyInput value = {value} 
                onChange={(e)=>setValue(e.target.value)}
            />
            
            <MyButton>Search</MyButton>
        </form>
    );
}
 
export default WeatherSearch;