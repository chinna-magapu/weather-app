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
            {(props.type == 'today') ? <div class="today forecast">
                <div class="forecast-header">
                    <div class="day">Monday</div>
                    <div class="date">6 Oct</div>
                </div>
                <div class="forecast-content">
                    <div class="location">New York</div>
                    <div class="degree">
                        <div class="num">23<sup>o</sup>C</div>
                        <div class="forecast-icon">
                            <img src={require("../../assets/images/icons/icon-1.svg")} alt="" width="90" />
                        </div>
                    </div>
                    <span><img src={require("../../assets/images/icon-umberella.png")} alt="" />20%</span>
                    <span><img src={require("../../assets/images/icon-wind.png")} alt="" />18km/h</span>
                    <span><img src={require("../../assets/images/icon-compass.png")} alt="" />East</span>
                </div>
            </div> : <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Tuesday</div>
                    </div>
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img src={require("../../assets/images/icons/icon-3.svg")} alt="" width="48" />
                        </div>
                        <div class="degree">23<sup>o</sup>C</div>
                        <small>18<sup>o</sup></small>
                    </div>
                </div>
            }
        </Wrap>
    );
}

export default forecastBlock;