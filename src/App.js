import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from "react-redux";
import Login from './scenes/login/Login'
import './App.css';
import Configuration from "./scenes/config/Config";

class App extends Component {
    render() {
        if (this.props.user.loggedIn) {
            return (
                <div className="App">
                    <header className="App-header">
                        <Configuration/>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <Login/>
                    </header>
                </div>
            );
        }

    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
});


export default connect(mapStateToProps, null)(App);