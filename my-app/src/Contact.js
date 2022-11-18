import React from "react";


export default function contact(props){
    return(
        <div className="contact-card">
            <div className="image">
                <img src={props.img}/>
            </div>
            <div className="name">
                <h3>{props.name}</h3>
            </div>
            <div className="phone">
                <p>
                    {props.phone}
                </p>
            </div>
            <div className="email">
                <p>
                    {props.email}

                </p>
            </div>  
        </div>
    )

   
}


 
