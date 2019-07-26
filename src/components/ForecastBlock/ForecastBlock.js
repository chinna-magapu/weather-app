import React from 'react';
import Wrap from '../../hoc/Wrap';



const forecastBlock = (props) => {
    console.log(props.data);
    let conClass = 'forecast';
    let extra_details = null
    if (props.type == 'today') {
        conClass = 'today forecast';
        extra_details = <Wrap><span><img src={require("../../assets/images/icon-umberella.png")} alt="" />20%</span>
            <span><img src={require("../../assets/images/icon-wind.png")} alt="" />{props.data.wind}km/h</span>
            <span><img src={require("../../assets/images/icon-compass.png")} alt="" />{props.data.compass}</span>
        </Wrap>
    }

    return (
        <Wrap>
            {(props.type == 'today') ? <div className="today forecast">
                <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                </div>
                <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                        <div className="num">23<sup>o</sup>C</div>
                        <div className="forecast-icon">
                            <img src={require("../../assets/images/icons/icon-1.svg")} alt="" width="90" />
                        </div>
                    </div>
                    <span><img src={require("../../assets/images/icon-umberella.png")} alt="" />20%</span>
                    <span><img src={require("../../assets/images/icon-wind.png")} alt="" />18km/h</span>
                    <span><img src={require("../../assets/images/icon-compass.png")} alt="" />East</span>
                </div>
            </div> : <div className="forecast">
                    <div className="forecast-header">
                        <div className="day">Tuesday</div>
                    </div>
                    <div className="forecast-content">
                        <div className="forecast-icon">
                            <img src={require("../../assets/images/icons/icon-3.svg")} alt="" width="48" />
                        </div>
                        <div className="degree">23<sup>o</sup>C</div>
                        <small>18<sup>o</sup></small>
                    </div>
                </div>
            }
        </Wrap>
    );
}

export default forecastBlock;