import React, { Component } from 'react';
import L from 'leaflet';
import { withRouter } from 'react-router';
import { updatedObject } from '../../shared/utility';
import { apiCallOWM } from '../../axios-order';
import keys from '../../config/keys';
import Modal from '../../UI/Modal/Modal';
import { CSSTransition } from 'react-transition-group';
import './Map.css';

class Map extends Component {
    state = { 
        markerPosition: { 
            lat: null, 
            lng: null 
        },
        showFull: false,
        showModal: true
    };

    componentDidMount() {
        let osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        this.map = L.map("map", {
            center: [60.17, 24.94],
            zoom: 16,
            // zoomControl: false,
            layers: [osm],
        }).on('click', this.clickHandler);
        this.map.invalidateSize();
    }

    componentDidUpdate () {
        this.marker = L.marker(this.state.markerPosition).addTo(this.map).on('mouseover', this.clickHandler);
        this.map.invalidateSize();
    }

    clickHandler = (e) => {
        const updatedMarkerPosition = updatedObject(this.state.markerPosition, {lat: e.latlng.lat, lng: e.latlng.lng})
        this.setState({markerPosition: updatedMarkerPosition});

        apiCallOWM.get(`weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${keys.apiKeyOWM}&units=metric`)
            .then(res => {
                console.log(res)
                let weatherData = {
                    location: res.data.name,
                    country: res.data.sys.country,
                    weatherIconCode: res.data.weather[0].icon,
                    weatherMain: res.data.weather[0].main,
                    temp: res.data.main.temp,
                    pressure: res.data.main.pressure,
                    humidity: res.data.main.humidity,
                    windSpeed: res.data.wind.speed,
                    weatherDescription: res.data.weather[0].description,
                    get weatherIcon() {return `http://openweathermap.org/img/w/${this.weatherIconCode}.png`}
                }

                let popupContent = 
                    `<div>
                        <h3>Weather Info</h3>
                            <div><img src=${weatherData.weatherIcon} alt="weatherIcon"/></div>
                            <div><span>${weatherData.weatherMain}: ${weatherData.weatherDescription}</span></div>
                            <br/>
                            <div><span>Location: ${weatherData.location}, ${weatherData.country}</span></div>
                            <br/>
                            <div><span>Temp: ${weatherData.temp}°C</span></div>
                            <div><span>Pressure: ${weatherData.pressure}hPa</span></div>
                            <div><span>Humidity: ${weatherData.humidity}%</span></div>
                            <div><span>Wind Speed: ${weatherData.windSpeed}km/h</span></div>
                            <br/>
                    </div>`
                
                const popup = L.popup();
                popup.setLatLng(e.latlng)
                .setContent(popupContent)
                .openOn(this.map);
            });
    }

    keyPressHandler = e => {
        console.log(e.key);
        if (e.key == 'Escape') {
            this.props.history.push('/')
        };
    }

    render() {
        const fullScreen = {
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '2'
        };

        return (
            <div className="section">
                <div {...this.props} 
                    id="map" 
                    style={fullScreen}
                    onMouseMove={() => this.setState({showModal: false})}
                    onKeyDown={event => this.keyPressHandler(event)}/>
                <CSSTransition unmountOnExit timeout={500} in={this.state.showModal} className="modal">
                    <Modal/>
                </CSSTransition>
            </div>
        )
    }
}

export default withRouter(Map);

