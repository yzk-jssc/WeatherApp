import { FunctionComponent, InputHTMLAttributes } from "react";
import clasess from './MyInput.module.css'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
}
 
const MyInput: FunctionComponent<MyInputProps> = ({...props}) => {
    return ( 
        <input type="text" className={clasess.myInp}  {...props}/>
     );
}
 
export default MyInput;

