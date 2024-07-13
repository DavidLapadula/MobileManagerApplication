import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'; 
import ReduxThunk from 'redux-thunk'; 
import reducers from './reducers';
import Router from './Router'; 


class App extends Component {

    componentWillMount()  {
        const config = {
            apiKey: 'AIzaSyBowSqYmuv9IMCNrBlXw0mfC3iK_WeqXHQ',
            authDomain: 'managerredux-b64f1.firebaseapp.com',
            databaseURL: 'https://managerredux-b64f1.firebaseio.com',
            projectId: 'managerredux-b64f1',
            storageBucket: 'managerredux-b64f1.appspot.com',
            messagingSenderId: '241023770492'
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App; 