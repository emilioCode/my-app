import React from "react";
import  { useParams } from 'react-router-dom';

export default function Profile(){
    const { name } = useParams();
    console.log(name);
    return(
        <div>
            <p>Profile: {name}</p>
        </div>
    )
}