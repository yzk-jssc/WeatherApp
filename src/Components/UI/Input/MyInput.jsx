import React from 'react';
import classes from './MyInput.module.css'

const Myinput = ({placeholder,...props}) => {
    return (

            <input type="text" className={classes.myInp} placeholder={placeholder} {...props}/>
            
    );
}

export default Myinput;
