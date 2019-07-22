import React, { Component } from 'react';
import Wrap from '../../hoc/Wrap';
import ForecastBlock from '../../components/ForecastBlock/ForecastBlock';

class Forecast extends Component {
    render() {
        const weatherData = [
            {
                day: 'Monday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Tuesday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Wednesday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Thursday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Friday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Saturday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            },
            {
                day: 'Sunday',
                date: '6 Oct',
                location: 'New York',
                deg: 23,
                wind: 18,
                imgType: '',
                compass: 'East'
            }
        ]

        let forecastBlocks = weatherData.map((arr, key) => {
            const type = (key == 0)? 'today' : ''
            return <ForecastBlock data={arr} type={type}  key={key + 1} />
        });
        if (forecastBlocks.length === 0) {
            forecastBlocks = null;
        }
        return (
            <Wrap>
                <div className="hero" data-bg-image="images/banner.png">
                    <div className="container">
                        <form action="#" className="find-location">
                            <input type="text" placeholder="Find your location..." />
                            <input type="submit" value="Find" />
                        </form>

                    </div>
                </div>

                <div className="forecast-table">
                    <div className="container">
                        <div className="forecast-container">
                            {forecastBlocks}
                        </div>
                    </div>
                </div>
            </Wrap>
        )
    }
}

export default Forecast;