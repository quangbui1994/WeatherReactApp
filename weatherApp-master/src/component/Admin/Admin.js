import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Spinner from '../../UI/Spinner/Spinner';

class Admin extends Component {
    state = {
        loading: false,
        users: []
    }

    componentDidMount() {
        this.setState({loading: true});
        this.props.firebase
            .users().on('value', snapshot => {
                const usersObject = snapshot.val();

                console.log(usersObject);
                const usersArr = Object.keys(usersObject).map(key => {
                    return {
                        ...usersObject[key],
                        uid: key
                    }  
                });
                this.setState({users: usersArr, loading: false});
            });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        return (
            <div>
                {this.state.loading && <Spinner />}
                {this.state.users.map(user => {
                    return <li key={user.uid}>Account: {user.email} {user.uid}, Roles: {user.roles ? user.roles.ADMIN : null}</li>
                })}
            </div> 
        )
    }
}

export default withFirebase(Admin);