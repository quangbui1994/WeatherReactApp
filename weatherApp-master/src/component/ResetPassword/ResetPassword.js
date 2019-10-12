import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { updatedObject } from '../../shared/utility';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router';
import * as Routes from '../../constants/routes';

const INITIAL_STATE = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            value: '',
            touched: false,
            label: 'Email',
            valid: false
        }
    },
    isFormValid: false,
    error: ''
}

class ResetPassword extends Component {
    state = {...INITIAL_STATE};

    onChangedHandler = (event, element) => {
        let updatedElement;
        if (event.target.value.length > 0) {
            updatedElement = updatedObject(this.state.controls[element], {value: event.target.value, touched: true, valid: true});
        } else {
            updatedElement = updatedObject(this.state.controls[element], {value: event.target.value, touched: true, valid: false});
        }

        const updatedControls = updatedObject(this.state.controls, {[element]: updatedElement});
        this.setState({controls: updatedControls});

        let isFormValid = true;
        for (updatedElement in updatedControls) {
            isFormValid = updatedControls[updatedElement].valid && isFormValid; 
        }
        this.setState({isFormValid});
    }   

    onSubmitHandler = e => {
        const email = this.state.controls.email.value;
        e.preventDefault();
        this.props.firebase
            .doPasswordReset(email)
            .then(
                authUser => {
                    this.setState({...INITIAL_STATE});
                    this.props.history.push(Routes.LANDING_PAGE);
                    console.log(authUser);
                }
            )
            .catch(error => this.setState({error}))
    }

    render() {
        let errorMessage = (
            <div className="col-12-of-12 errorMessage">
                {this.state.error 
                    ? <span className="message">{this.state.error.message}</span> 
                    : <span className="message">Please enter your email</span>}
            </div>
        )

        return (
           <div>
                <div className="row col-6-of-12">
                    <h1 className="primary__heading title">Forget Password?</h1>
                </div>              
                <form style={{alignItems: 'start'}} className="row col-6-of-12" onSubmit={this.onSubmitHandler}>
                    {errorMessage}
                    {Object.entries(this.state.controls).map(el => {
                        return (
                            <div className="col-10-of-12">
                                <Input 
                                    elementtype={el[1].elementType}
                                    elementconfig={el[1].elementConfig}
                                    value={el[1].value}
                                    changed={event => this.onChangedHandler(event, el[0])}
                                    label={el[1].label}
                                    valid={el[1].valid}
                                    touched={el[1].touched}/>
                            </div>
                        )
                    })} 
                    <Button disabled={!this.state.isFormValid} btnType='Btn-primary'>Submit</Button>
                </form>
           </div> 
        )
    }
}

export default withRouter(withFirebase(ResetPassword));