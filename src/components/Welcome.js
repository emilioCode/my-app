import React from 'react';

export default function Welcome({name, text}){
    return(
        <div>
            <p>Welcome {name}</p>
            <p>{text}</p>
        </div>
    )
}