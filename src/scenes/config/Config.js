import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

class Config extends React.Component {

    state = {
        currentItem: 0
    };

   renderMenuItem(index) {
        console.log(index);
        if (index === 1) {
            return <div>Universitiyes</div>
        } else if (index === 0) {
            return <div>Topics</div>
        } else {
            return <div>Locales</div>
        }
    }

    renderTitle(index) {
       switch (index) {
           case 0:
               return 'Universities';
           case 1:
               return 'Topics';
           default:
               return 'Tags and Locales';
       }
    }

    handleListItemClick(event, index) {
        this.setState({
            currentItem: index
        })
    }

    render() {

        const {classes} = this.props

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            {this.renderTitle(this.state.currentItem)}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar}/>
                    <List component="nav">
                        <ListItem
                            button
                            selected={this.state.currentItem === 0}
                            onClick={event => this.handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Universities"/>
                        </ListItem>
                        <ListItem
                            button
                            selected={this.state.currentItem === 1}
                            onClick={event => this.handleListItemClick(event, 1)}
                        >

                            <ListItemText primary="Topics"/>
                        </ListItem>
                        <ListItem
                            button
                            selected={this.state.currentItem === 2}
                            onClick={event => this.handleListItemClick(event, 2)}
                        >

                            <ListItemText primary="Tags and Locales"/>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {this.renderMenuItem(this.state.currentItem)}
                </main>
            </div>
        );
    }
}

Config.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Config);