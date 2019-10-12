import React from 'react';
import { FirebaseContext } from '../component/Firebase';

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);
   
