import React, { Component } from 'react';
import Wrap from '../../hoc/Wrap';
import ForecastBlock from '../../components/ForecastBlock/ForecastBlock';
import { Route , Switch } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import Blog from '../Blog/Blog';
import FullPost from '../Blog/FullPost/FullPost';

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
            const type = (key == 0) ? 'today' : ''
            return <ForecastBlock data={arr} type={type} key={key + 1} />
        });
        if (forecastBlocks.length === 0) {
            forecastBlocks = null;
        }
        const home = <Wrap>
            <div className="hero">
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
        return (
            <Wrap>
                <Switch>
                <Route path='/' exact render={() => home } />
                <Route path='/posts' exact component={ Blog} />
                <Route path='/new-post' component={ FullPost } />
                <Route path='/:id' component={ FullPost } />
                </Switch>
                
            </Wrap>
        )
    }
}

export default Forecast;