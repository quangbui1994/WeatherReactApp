import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { CSSTransition } from 'react-transition-group';

import Map from '../Map/Map';
import SearchForm from '../SearchForm/SearchForm';
import WeatherResult from '../../component/WeatherResult/WeatherResult';
import './Home.css';
import Spinner from '../../UI/Spinner/Spinner';


class Home extends Component {
    state = {
        showMap: false,
        showFull: false,
        isAuthenticated: null
    }

    componentDidMount () {
        this.setState({isAuthenticated: this.props.token !== null});
        this.props.setInitialData();
    }

    render() {
        return (
            <div className="Home">
                <div className="row col-6-of-12">
                    <h1 className="primary__heading title">Never Worry about Weather Forecast anymore</h1>
                </div>
                <SearchForm 
                    showMap={this.state.showMap} 
                    mapToggle={() => this.setState(prevState => ({showMap: !prevState.showMap}))}/>
                {this.props.city !== null ?    
                    <CSSTransition
                        in={this.props.city !== null}
                        timeout={500}
                        unmountOnExit
                        mountOnEnter
                        classNames="result"
                        >
                        <WeatherResult isAuthenticated={this.state.isAuthenticated}/>    
                    </CSSTransition> : null}
                <div className="row col-4-of-12">
                    <CSSTransition unmountOnExit timeout={500} in={this.state.showModal} className="modal">
                        <Map click={() => this.setState({showFull: true}, () => console.log(this.state.showFull))} showFull={this.state.showFull}/>                         
                    </CSSTransition>
                </div>
                {this.props.spinner && <Spinner/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.weather.city,
        spinner: state.weather.spinner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialData: () => dispatch(actionCreators.setInitialData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);