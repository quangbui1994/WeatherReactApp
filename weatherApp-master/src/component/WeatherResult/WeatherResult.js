import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Aux from 'react-aux';

import WeatherResultItem from './WeatherResultItem/WeatherResultItem';
import * as actionCreators from '../../store/actions/index';
import { getDate } from '../../shared/utility';
// import cityService from '../../services/city';
import { withFirebase } from '../Firebase';

class WeatherResult extends Component {
    saveDataHandler = (name, temp, tempMin, tempMax, humidity, windSpeed, windDeg, cityId, description, localId) => {
        const isAuthenticated = sessionStorage.getItem('token');
        const userUid = sessionStorage.getItem('uid');
        if (isAuthenticated) {
            this.props.firebase.db.collection('cities').doc(name).set({
                name,
                temp,
                tempMax,
                tempMin,
                humidity,
                windSpeed,
                windDeg,
                cityId,
                userUid
            })
            .then(() => {
                // this.props.history.push('/mycities');
            })
            .catch(error => {
                console.log('Getting error', error.message);
            });
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        let resultSection = this.props.city === null ? '' : (
            <div className="row">
                <div className="col-12-of-12">
                    <h3 className="third__heading">
                        <span className="third__heading--first">Today /</span>
                        <span className="third__heading--second">{getDate()}</span>
                    </h3>   
                </div>
                <WeatherResultItem 
                    cityName={this.props.city.name}
                    temp={Math.round(this.props.city.temp)}
                    tempMin={this.props.city.tempMin}
                    tempMax={this.props.city.tempMax}
                    humidity={this.props.city.humidity}
                    windSpeed={this.props.city.wind.speed}
                    windDeg={this.props.city.wind.deg}
                    description={this.props.city.weather[0].main}
                    remove={() => this.removeDataHandler(this.props.city.id)}
                    add={() => this.saveDataHandler(
                        this.props.city.name,
                        this.props.city.temp,
                        this.props.city.tempMin,
                        this.props.city.tempMax,
                        this.props.city.humidity,
                        this.props.city.wind.speed,
                        this.props.city.wind.deg,
                        this.props.city.id,
                        this.props.city.weather[0].main, 
                        this.props.localId)}/> 
            </div>  
        );
        return (
            <Aux>
                {resultSection}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.weather.city,
        localId: state.auth.localId,
        isAuthenticated: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveDataHandler: (id, user) => dispatch(actionCreators.saveDataHandler(id, user))
    }
}

export default withRouter(withFirebase(connect(mapStateToProps, mapDispatchToProps)(WeatherResult)));