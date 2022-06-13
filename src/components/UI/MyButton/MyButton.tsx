import { ButtonHTMLAttributes, FunctionComponent } from "react";
import classes from './MyButton.module.css'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}
 
const MyButton: FunctionComponent<MyButtonProps> = (props) => {
    return ( 
        <button className={classes.myBtn} {...props}>
            
        </button>
     );
}
 
export default MyButton;