import React, { Component } from 'react';
var firebase = require('firebase');

// confic firebase
var config = {
  apiKey: "AIzaSyCDRqx93tjROISH01633Yb5KE2WHJlwKX0",
  authDomain: "fir-login-86356.firebaseapp.com",
  databaseURL: "https://fir-login-86356.firebaseio.com",
  projectId: "fir-login-86356",
  storageBucket: "fir-login-86356.appspot.com",
  messagingSenderId: "55432701631"
};
firebase.initializeApp(config);

export default class Authen extends Component {

  login = (event) => {
    // capture values of input email and password
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    // sign in with email and password
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise
    .then(user => {
      var lout = document.getElementById('logout');
      var lin = document.getElementById('login');

      // if user is logged in, show logout button
      lout.classList.remove('hide');
      lin.classList.add('hide');


      var message = "Welcome, " + user.email;
      this.setState({err: message});
    });

    promise.catch(error => {
      var err = error.message;
      this.setState({err: err});
    });
  }

  signup = (event) => {
    // capture values of input email and password
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      var message = "Welcome " + user.email;
      // add to firebase
      firebase.database().ref('users/' + user.uid).set({
        email: user.email
      });
      console.log(user);
      this.setState({err: message});
    });

    promise
    .catch(error => {
      var err = error.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  logout = () => {
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    var lin = document.getElementById('login');
    // if user is logged out, do not show logout button
    lout.classList.add('hide');
    lin.classList.remove('hide');


    var message = "Thanks, see you again!";
    this.setState({err: message});
  }

  googlelogin = () => {
    console.log('i am in google method');

    // invoke whenever signin with Google
    var provider = new firebase.auth.GoogleAuthProvider()

    const promise = firebase.auth().signInWithPopup(provider);

    promise
    .then(result => {
      var user = result.user;
      console.log(result);
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        name: user.displayName
      });

      var message = "Welcome, " + user.displayName;
      this.setState({err: message});

      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
      var lin = document.getElementById('login');
      lin.classList.add('hide');

    });

    promise
    .catch(error => {
      var err = error.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
  }

  render(){
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /> <br />
        <p>{this.state.err}</p>

        <button onClick={this.login} id="login">Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button><br />
        <button onClick={this.googlelogin} id="google">Sign in with Google</button>

      </div>
    );
  }
}

