import React, { Component } from 'react';
import Aux from 'react-aux';
import ResultOnlyFront from './resultOnlyFront/resultOnlyFront';
import ResultOnlyBack from './resultOnlyBack/resultOnlyBack';
import './WeatherResultItem.css';
import { connect } from 'react-redux';

class WeatherResultItem extends Component {
    render() {
        let itemStyles = ['WeatherResultItem', 'section'];
        let result = null;

        if (this.props.authUser) {
            itemStyles.push('forUser');
            result = (
                <div className={itemStyles.join(' ')} style={this.props.style}>
                    <ResultOnlyBack 
                        authUser={this.props.authUser}
                        cityName={this.props.cityName}
                        temp={Math.round(this.props.temp)}
                        description={this.props.description}
                        tempMin={this.props.tempMin}
                        tempMax={this.props.tempMax}
                        humidity={this.props.humidity}
                        windSpeed={this.props.windSpeed}
                        windDeg={this.props.windDeg}
                        remove={this.props.remove}
                        add={this.props.add}/>
                    <ResultOnlyFront 
                        cityName={this.props.cityName}
                        temp={Math.round(this.props.temp)}
                        description={this.props.description}/>
                </div>
            )
        } else {
            result = (
                <div className={itemStyles.join(' ')}>
                    <ResultOnlyBack 
                        authUser={this.props.authUser}
                        cityName={this.props.city.name}
                        temp={Math.round(this.props.city.temp)}
                        description={this.props.city.weather.map(el => el.main)}
                        tempMin={this.props.city.tempMin}
                        tempMax={this.props.city.tempMax}
                        humidity={this.props.city.humidity}
                        windSpeed={this.props.city.wind.speed}
                        windDeg={this.props.city.wind.deg}
                        add={this.props.add}/>
                </div>
            )
        }
        return (
            <Aux>
                {result}
            </Aux>
        )
    }
}

const mapStateToDispatch = state => {
    return {
        city: state.weather.city,
        forUser: state.auth.token
    }
}

export default connect(mapStateToDispatch)(WeatherResultItem);

