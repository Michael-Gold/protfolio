import React, { useContext } from "react";
import {contactValue} from '../context/UserProvider';

export default function Contact (){
    const details = useContext(contactValue);
    return(
        <div>
            <h1>Contact Page</h1>
            <h4>{details.name}</h4>
        </div>
    )
}