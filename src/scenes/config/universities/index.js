import React from 'react';
import * as actions from './actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import List from "@material-ui/core/es/List/List";
import Divider from "@material-ui/core/es/Divider/Divider";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Typography from "@material-ui/core/es/Typography/Typography";
import ListItemSecondaryAction from "@material-ui/core/es/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';

class Universities extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveNotebook = this.setActiveNotebook.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadUniversities();
    }

    setActiveNotebook(index) {
        this.props.actions.setActiveBook(index);
    }

    update(index, item) {
        this.props.actions.updateUniversity(item, {fullName: "new name", shortName: "new short name"})
    }

    delete(index, item) {
        this.props.actions.deleteUniverisity(item)
    }

    forAllNotebooks(item, index) {
        console.log(item)
        return (
            <ListItem button>
                <ListItemText primary={item.fullName}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => this.delete(index, item)} aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => this.update(index, item)} aria-label="Edit">
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

    render() {
        console.log(this.props)
        return (
                <section className='w3-cell-row'>
                    <List style={{height: '100%', width: '25%'}} className=' w3-container  w3-cell w3-mobile'>
                        {this.props.unis.map(this.forAllNotebooks, this)}
                        <Divider/>
                    </List>
                </section>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Universities);
