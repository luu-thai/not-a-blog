import React from 'react';

export const BlogsList=(props)=>{

    return(
        <div className="List">
            <ul>
                <li>{props.title}</li>
            </ul>
        </div>
    )
}