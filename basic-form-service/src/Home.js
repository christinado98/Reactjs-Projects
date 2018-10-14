import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return(
            <div>
                <h1>Welcome! Click Proceed to begin the survey!</h1>
                <button><Link to='/firstpage'>Proceed</Link></button>
            </div>
            
        );
    }
}