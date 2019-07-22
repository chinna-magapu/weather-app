import React from 'react';
import Wrap from '../../hoc/Wrap';


const forecastBlock = (props) => {
    console.log(props.data);
    let conClass = 'forecast';
    let extra_details = null
    if(props.type == 'today'){
        conClass = 'today forecast';
        extra_details = <Wrap><span><img src={require("../../assets/images/icon-umberella.png")} alt="" />20%</span>
        <span><img src={require("../../assets/images/icon-wind.png")} alt="" />{props.data.wind}km/h</span>
        <span><img src={require("../../assets/images/icon-compass.png")} alt="" />{props.data.compass}</span> 
        </Wrap>
    }
    
    return (
        <div className={conClass}>
            <div className="forecast-header">
                { (props.type == 'today') ? <div className="day">{props.data.date}</div>: null }
                <div className="date">{props.data.day }</div>
            </div>
            <div className="forecast-content">
                <div className="location">{props.data.location}</div>
                <div className="degree">
                    <div className="num">{props.data.deg}<sup>o</sup>C</div>
                    <div className="forecast-icon">
                        <img src={require('../../assets/images/icons/icon-13.svg')} alt="123" width="90" />
                    </div>
                </div>
                {extra_details}
            </div>
        </div>
    );
}

export default forecastBlock;