import React from 'react';

const ResultOnlyFront = (props) => (
    <div className="Item Item--front">
        <div className="col-6-of-12 cityName--back">
            <h2 className="secondary__heading" style={{color: 'floralwhite'}}>{props.cityName}</h2>
        </div>
        <div className="col-1-of-12">
            <div className="temp">
                {props.temp}°
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    </div> 
)

export default ResultOnlyFront;