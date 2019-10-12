import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Aux from 'react-aux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import WeatherResultItem from '../../component/WeatherResult/WeatherResultItem/WeatherResultItem';
import './MyCities.css';
// import withAuthorization from '../../hoc/withAuthorization';
import { withFirebase } from '../../component/Firebase';
import Spinner from '../../UI/Spinner/Spinner';

class MyCities extends Component {
    state = {
        listCity: [],
        hasCity: false
    }
    componentDidMount () {
        let uid = sessionStorage.getItem('uid');
        this.props.firebase.db.collection('cities').where('userUid', '==', uid).get()
            .then(docSnapshot => {
                if (docSnapshot) {
                    let listCity = [...this.state.listCity];
                    docSnapshot.forEach(doc => {
                        listCity.push(doc.data());
                    });
                    this.setState({ listCity, hasCity: true });
                } else {

                }    
            })
            .catch(error => {
                console.log('Getting error', error);
            });
        // this.props.getCityData(this.props.userCityId);
    }

    removeDataHandler = (id) => {
        this.props.firebase.db.collection('cities').where('cityId', '==', id).get().then(docSnapshot => {
            docSnapshot.forEach(doc => doc.ref.delete());
        })
        .catch(error => {
            console.log('Getting error', error.message);
        });
        let listCity = this.state.listCity.filter(el => el.cityId !== id);
        this.setState({ listCity });
    }

    render() {
        let listUserCity = null;
        let delay = -250;
            listUserCity = (
                <TransitionGroup>
                    {
                        this.state.listCity.map(city => {
                            const timeout = 500
                            delay += timeout / 2;
                            console.log(delay)
                            return (
                                <CSSTransition
                                    key={city.name}
                                    in={this.state.listCity.length > 1}
                                    timeout={timeout}
                                    unmountOnExit
                                    mountOnEnter
                                    classNames="results">
                                        <WeatherResultItem 
                                            authUser
                                            cityName={city.name}
                                            temp={Math.round(city.temp)}
                                            tempMin={city.tempMin}
                                            tempMax={city.tempMax}
                                            humidity={city.humidity}
                                            windSpeed={city.windSpeed}
                                            windDeg={city.windDeg}
                                            remove={() => this.removeDataHandler(city.cityId)}
                                            description={city.description}
                                            style={{transitionDelay: `${delay}ms`}}/>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            );  
        return (
            <Aux>
                <div className="row col-6-of-12">
                    <h1 className="primary__heading title">Save weather for your adventures</h1>
                </div>
                <h2 className="secondary__heading" style={{marginTop: '2rem', marginBottom: '3rem'}}>{this.state.listCity.length > 0 ? 'Your saved cities' : 'Please add your city'}</h2>  
                {this.state.listCity.length === 0 && this.state.hasCity === false && <div style={{width: '20%', margin: '4rem auto'}}><Spinner/></div>}
                {listUserCity}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        userCityId: state.user.idList,
        listCity: state.user.listCity
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCityData: (id) => dispatch(actionCreators.getCityData(id)),
        removeCityData: (id) => dispatch(actionCreators.removeCityData(id))
    }
}

export default withFirebase((connect(mapStateToProps, mapDispatchToProps)(MyCities)));