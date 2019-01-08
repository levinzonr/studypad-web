import React from 'react'
import * as actions from '../../data/user/actions'
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import {bindActionCreators} from "redux";

import Button from '@material-ui/core/Button';

class Login extends React.Component {


    render() {
        return (
            <div className="w3-container w3-accordion">
                <TextField
                    id="outlined-name"
                    label="Name"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    onClick={() => {
                        console.log("click ligin");
                        this.props.actions.login("roma@mail.ru", "19961600")
                    }}
                    variant="contained"
                    color="primary">
                    Login
                </Button
>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),

    };
}


export default connect(null, mapDispatchToProps)( Login);