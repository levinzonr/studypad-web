import React from 'react';
import * as actions from './actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import List from "@material-ui/core/es/List/List";
import Divider from "@material-ui/core/es/Divider/Divider";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/es/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";

class Topics extends React.Component {

    componentDidMount() {
        this.props.actions.loadTopics();
    }

    delete(item) {
        this.props.actions.deleteTopic(item)
    }

    forAllNotebooks(item, index) {
        return (
            <ListItem button>
                <ListItemText primary={item.name}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => this.delete(item)} aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

    render() {
        console.log(this.props)
        return (
            <section className='w3-cell-row'>
                <List style={{height: '100%', width: '50%'}} className=' w3-container  w3-cell w3-mobile'>
                    {this.props.topics.map(this.forAllNotebooks, this)}
                    <Divider/>
                </List>
                <TextField
                    onChange={(event) => this.props.actions.setNewTopicName(event.target.value)}

                />
                <Button disabled={this.props.name.length === 0} onClick={() => this.props.actions.createTopic()} variant="contained" color="primary">
                    Add
                </Button>
            </section>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    topics: state.topics.topics,
    name: state.topics.newTopic
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
