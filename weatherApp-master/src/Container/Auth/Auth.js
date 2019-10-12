import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Aux from 'react-aux';
import { updatedObject } from '../../shared/utility';
import { connect } from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import './Auth.css';
import * as Routes from '../../constants/routes';
import Spinner from '../../UI/Spinner/Spinner';
import { withFirebase } from '../../component/Firebase';
import LoginButton from '../../UI/LoginButton/LoginButton';
import LineSeparator from '../../UI/LineSeparator/LineSeparator';
import * as Roles from '../../constants/roles';

const INITIAL_STATE = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email'
            },
            label: 'Email:',
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            label: 'Password:',
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    },
    isAdmin: false,
    isFormValid: false,
    goSignup: false,
    error: null
}

class Auth extends Component {
    state = {...INITIAL_STATE};

    authModeHandler = () => {
        this.setState(prevState => {
            return {
                goSignup: !prevState.goSignup
            };
        });
    }

    validCheckHandler = element => {
        let updatedElement = {...this.state.controls[element]};
        if (updatedElement.value.length > 0) {
            updatedElement = updatedObject(updatedElement, { valid: true })
        }

        let updatedControls = updatedObject(this.state.controls, { [element]: updatedElement });
        let isFormValid = true;
        for (updatedElement in updatedControls) {
            isFormValid = updatedControls[updatedElement].valid && isFormValid;
        };
        this.setState({ controls: updatedControls, isFormValid});
    }

    inputChangedHandler = (event, element) => {
        let value = event.target.value;
        let updatedElement;

        if (value.length > 0) {
            updatedElement = updatedObject(this.state.controls[element], { valid: true, value, touched: true })
        } else {
            updatedElement = updatedObject(this.state.controls[element], { valid: false, value })
        }

        let updatedControls = updatedObject(this.state.controls, { [element]: updatedElement });
        let isFormValid = true;
        for (updatedElement in updatedControls) {
            isFormValid = updatedControls[updatedElement].valid && isFormValid;
        };
        this.setState({ controls: updatedControls, isFormValid});
    }

    submitFormHandler = (event) => {
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        const roles = {};
        if (this.state.isAdmin) {
            roles[Roles.ADMIN] = Roles.ADMIN
        }
        event.preventDefault();
        if (this.state.goSignup) {
            this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                sessionStorage.setItem('token', authUser.user.refreshToken);
                sessionStorage.setItem('uid', authUser.user.uid);
            })
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(Routes.HOME);
            })
            .catch(error => this.setState({error}));
        } else {
            this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                sessionStorage.setItem('token', authUser.user.refreshToken);
                sessionStorage.setItem('uid', authUser.user.uid);
            })
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(Routes.HOME);
            })
            .catch(error => {
                this.setState({error});
            });
        } 
    }

    onChangeCheckBoxHandler = e => {
        this.setState({ [e.target.name]: e.target.checked });
    }

    GoogleAuthHandler = () => {
        this.props.firebase.doSignInWithGoogle().then(authUser => {
            let uid = authUser.user.uid;
            let token = authUser.user.refreshToken;
            sessionStorage.setItem('uid', uid);
            sessionStorage.setItem('token', token);
            this.props.history.push(Routes.HOME);
        })
        .catch(error => {
            console.log('Getting error', error.message)
        })
    }

    FacebookAuthHandler = () => {
        this.props.firebase.doSignInWithFacebook().then(authUser => {
            console.log(authUser);
            let uid = authUser.user.uid;
            let token = authUser.user.refreshToken;
            sessionStorage.setItem('uid', uid);
            sessionStorage.setItem('token', token);
            this.props.history.push(Routes.HOME);
        })
        .catch(error => {
            console.log('Getting error', error.message)
        })
    }

    render() {
        const style = {
            color: '#1abc9c',
            fontWeight: '300',
            display: 'block',
            padding: '10px 0',
            marginRight: '1rem'
        }

        let input = Object.entries(this.state.controls).map(el => {
            return (
                <div key={el[0]} className="row col-12-of-12">
                    <div className="col-6-of-12">
                        <Input 
                        valid={el[1].valid}
                        elementtype={el[1].elementType}
                        elementconfig={el[1].elementConfig}
                        value={el[1].value}
                        label={el[1].label}
                        touched={el[1].touched}
                        changed={event => this.inputChangedHandler(event, el[0])}/>
                    </div>   
                </div>
            )
        });

        let errorMessage = (
            <div className="row col-12-of-12 errorMessage">
                {this.state.error 
                    ? <span className="message">{this.state.error.message}</span> 
                    : <span className="message">Please fill the form</span>}
            </div>
        )
        
        let authForm = (
            <Aux>
                <div className="row col-6-of-12">
                    <h1 className="primary__heading title">{this.state.goSignup === true ? 'Sign up' : 'Log in'}</h1>
                </div>
                {errorMessage}
                <form className="Form" onSubmit={this.submitFormHandler}>
                    {input}
                    <div className="row">
                        <Button disabled={!this.state.isFormValid} btnType='Btn-primary'>Submit</Button>
                        <Button type="button" btnType="Switch" click={() => this.authModeHandler(this.state.goSignup)}>SWITCH TO {this.state.goSignup ? 'LOGIN' : 'SIGN UP'}</Button>  
                        <Link to={Routes.PASSWORD_RESET} style={style}>Forget Password?</Link>
                        {/* <label style={style}>
                            Admin:
                            <input 
                            type="checkbox"
                            name="isAdmin"
                            onChange={this.onChangeCheckBoxHandler}
                            checked={this.state.isAdmin}/>
                        </label>  */}
                    </div>          
                </form>
                <LineSeparator />
                <div className="row col-6-of-12">
                    <LoginButton click={this.GoogleAuthHandler} name="Google"/>
                    <LoginButton click={this.FacebookAuthHandler} name="Facebook"/>
                </div>    
            </Aux>
            
        )

        if (this.props.spinner) {
            authForm = <Spinner />
        }
        
        let token = sessionStorage.getItem('token')
        if (token) {
            authForm = <Redirect to="/"/>
        }

        return (
            <Aux>
                {authForm}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        err: state.auth.err,
        spinner: state.auth.spinner
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         authHandler: (email, password, goSignup) => dispatch(actionCreators.authHandler(email, password, goSignup))
//     }
// }

export default withRouter(withFirebase(connect(mapStateToProps)(Auth)));