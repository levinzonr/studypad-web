import React from 'react'
import * as actions from '../../actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";


class CreateUniversityComponent extends React.Component {
    state = {
        show: false
    };


    changeState() {
        this.setState({
            show: !this.state.show

        })

    }



    render() {


        return (
            <div>
                <Button onClick={() => this.changeState()}>{this.state.show ? 'Show' : 'Hide'}</Button>
                <Dialog open={this.state.show} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            onChange={(val) => this.props.actions.setNewSchoolName(val.target.value)}
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            onChange={(val) => this.props.actions.setShortName(val.target.value)}
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.actions.createUniversity()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.changeState()} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    unis: state.unis.universities
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUniversityComponent);
