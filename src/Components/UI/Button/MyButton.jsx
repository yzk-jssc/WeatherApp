import React from 'react';
import classes from './MyButton.module.css'

const Mybutton = ({children,...props}) => {
    return (
        <button className={classes.myBtn} {...props}>{children}</button>
    );
}

export default Mybutton;
