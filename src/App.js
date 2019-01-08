import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from "react-redux";
import Login from './scenes/login/Login'
import './App.css';
import Configuration from "./scenes/config/Config";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

class App extends Component {
    render() {
        if (this.props.user.loggedIn) {
            return (
                <div>
                    <header>
                        <Configuration/>
                    </header>
                </div>
            );
        } else {
            return (
                <div>
                    <header>
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