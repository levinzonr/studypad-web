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
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Icon from '@material-ui/core/Icon';
import EditIcon from "@material-ui/icons/Edit"
import Fab from "@material-ui/core/es/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';


class CreateUniversityComponent extends React.Component {
    state = {
        show: false
    };


    changeState() {
        this.setState({
            show: !this.state.show

        })

    }

    handleSave() {
        if (this.props.toEdit != null) {
            this.props.actions.updateUniversity(this.props.toEdit, this.props.edited)
        } else {
            this.props.actions.createUniversity()
        }
        this.changeState()
    }

    renderButton() {
        if (this.props.toEdit != null) {
            return (
                <IconButton onClick={() => this.changeState()}>
                    <EditIcon/>
                </IconButton>
            )
        } else {
            return (
                <Fab onClick={() => this.changeState()} variant="extended" aria-label="Add">
                    <AddIcon />
                    New
                </Fab>
            );
        }
    }

    render() {

        return [
               this.renderButton(),
                <Dialog open={this.state.show} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            defaultValue={this.props.toEdit == null ? "" : this.props.toEdit.fullName}
                            onChange={(val) => this.props.actions.setNewSchoolName(val.target.value)}
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            defaultValue={this.props.toEdit == null ? "" : this.props.toEdit.shortName}
                            onChange={(val) => this.props.actions.setShortName(val.target.value)}
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={() => this.changeState()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => this.handleSave()} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
        ]
    }

}

const mapStateToProps = (state, ownProps) => ({
    unis: state.unis.universities,
    edited: state.unis.newUniversity,
    show: state.unis.showDialog
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUniversityComponent);
