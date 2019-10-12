import React from 'react';
import Aux from 'react-aux';
import Icon from '../../../../UI/Icon/Icon';
import Button from '../../../../UI/Button/Button';

const ResultOnlyBack = (props) => {
    let itemBackStyles = ['Item'];
    if (props.authUser) {
        itemBackStyles.push('Item--back--user');
    } else {
        itemBackStyles.push('Item--back');
    }

    return (
        <Aux>
            <div className={itemBackStyles.join(' ')}>                    
                <div className="col-12-of-12">
                    <h2 className="secondary__heading" style={{color: 'floralwhite'}}>{props.cityName}</h2>
                </div>
                <div className="col-3-of-12">
                    <div className="temp">
                        {props.temp}°
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
                <div className="detailResult col-9-of-12" style={{position: 'absolute', right: '0', top: '1rem'}}>
                    <div className="row col-3-of-12 resultItem">
                        <div className="col-12-of-12">
                            <Icon iconName="thermometer" size="big"/>
                        </div>
                        <div className="col-12-of-12 itemInfo">
                            <div className="col-6-of-12">Min. {props.tempMin}°</div>
                            <div className="col-6-of-12">Max. {props.tempMax}°</div>
                        </div>   
                    </div>
                    <div className="col-3-of-12 resultItem">
                        <div className="col-12-of-12">
                            <Icon iconName="water" size="big"/>
                        </div>
                        <div className="col-12-of-12 itemInfo">
                            <div className="col-6-of-12">Humidity. {props.humidity}%</div>
                        </div> 
                    </div>
                    <div className="col-3-of-12 resultItem">
                        <div className="col-12-of-12">
                            <Icon iconName="cloud-outline" size="big"/>
                        </div>
                        <div className="col-12-of-12 itemInfo">
                            <div className="col-6-of-12">Wind Speed. {props.windSpeed} m/s</div>
                            <div className="col-6-of-12">Deg. {props.windDeg}°</div>
                        </div> 
                    </div>
                    <div className="col-2-of-12 resultItem">
                        <div className="col-12-of-12">
                            <Button click={props.authUser ? props.remove : props.add} btnType="Btn-normal">
                                {props.authUser ? <Icon iconName='trash' size="big"/> : <span>Add city</span>}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default ResultOnlyBack;