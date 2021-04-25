import React from 'react';
import './card.styles.css';

export const Card = props => {
    return(
        <div className="row">

            <div className="col-md-6">
                <img className="img-rounded img-responsive well-image"
                    src={props.cartoon.image} 
                    alt="cartoon"
                />
            </div>

            <div className="col-md-6">
                <h4>{props.cartoon.name}</h4>
                <p><strong>Status: </strong>{props.cartoon.status}</p>
            </div>
        </div>
)}