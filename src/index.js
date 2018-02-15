import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import firebase from 'firebase';
import { Provider} from 'react-redux';
import store from './store'
// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

//Import from local
//import local_data from '../public/local_data.json'
//console.log(local_data.greeting);

//Import from firebase

// Initialize Firebase
// TODO: Replace with your project's customized code snippet

var local_data = {}

// var db = firebase.database().ref('/');
// db.on('value',function(snapshot){
//    local_data = snapshot.val();
//    // fb.setState(local_data)
// });

// var database = firebase.database();
// database.ref('/data').once('value').then(function(snapshot) {
//   var local_data = (snapshot.val());
// });

// Containers
import FullConnected from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
//window.location.reload();

var config = {
    apiKey: "AIzaSyBAAfsFWObEO745uH7hXXTPfa4gNtCiJKI",
    authDomain: "firefirebase3103.firebaseapp.com",
    databaseURL: "https://firefirebase3103.firebaseio.com",
    projectId: "firefirebase3103",
    storageBucket: "firefirebase3103.appspot.com",
    messagingSenderId: "1088586648162"
  };
firebase.initializeApp(config);



var db = firebase.database();
db.ref('/').on('value', data => {
    if (data.val()) {
      store.dispatch({ type: 'SET_VAL', payload: data.val() });
    //  console.log('dispatched & displaying getstate:')
    //  console.log(store.getState());
    }
  });

//store.subscribe(FullConnected);


ReactDOM.render((

  <div>
  <HashRouter>
  <Provider store={store}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route path="/original" name="Home" component={FullConnected}/>
      <Route path="/" name="Home" component = {FullConnected} />

    //  <Route path="/" name="Home" render={props => <Full local_data= {local_data} />} />
    </Switch>
  </Provider>
  </HashRouter>
  </div>

), document.getElementById('root'));
