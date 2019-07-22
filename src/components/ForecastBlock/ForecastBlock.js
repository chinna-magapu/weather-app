import React from 'react';

const forecastBlock = (props) => {
    console.log(props.data);
    let conClass = 'forecast';
    if(props.type == 'today'){
        conClass = 'today forecast';
    }
    
    return (
        <div className={conClass}>
            <div className="forecast-header">
                <div className="day">{props.data.day}</div>
                <div className="date">{props.data.date}</div>
            </div>
            <div className="forecast-content">
                <div className="location">{props.data.location}</div>
                <div className="degree">
                    <div className="num">{props.data.deg}<sup>o</sup>C</div>
                    <div className="forecast-icon">
                        <img src="../" alt="123" width="90" />
                    </div>
                </div>
                <span><img src="images/icon-umberella.png" alt="" />20%</span>
                <span><img src="images/icon-wind.png" alt="" />{props.data.wind}km/h</span>
                <span><img src="images/icon-compass.png" alt="" />{props.data.compass}</span>
            </div>
        </div>
    );
}

export default forecastBlock;