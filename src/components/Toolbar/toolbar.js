/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    withRouter
} from 'react-router-dom'

/**
* Components
*/

import MenuButton from '../MenuButton/menuButton';
import NavigationItems from '../NavigationItems/navigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/navigationItem';
import LogoOX from '../../Image/LogoXO.png';
import Backdrop from '../../library/Backdrop/backdrop';
import SideDrawer from '../SideDrawer/sideDrawer';


/**
* Styles
*/

import './toolbar.scss';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Toolbar component definition and export
*/

class Toolbar extends Component {

    /**
    * Methods
    */
    
    renderSideDrawer = () => {
        return(
            <SideDrawer
                sideDrawerHandler={() => this.props.sideDrawerIsOpen("No")}
                sideDrawerOpen={this.props.sideDrawerOpen}
            />
        )
    }

    navigateToWelcomePage = () => {
        this.props.history.push('/');
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="toolbar">
                <div onClick={this.navigateToWelcomePage}>
                    <img src={LogoOX} alt="logoXO"/>
                </div>
                <NavigationItems className={"navigationItems-toolbar"}>
                    <NavigationItem 
                        className={"navigationItem"}
                        path={"/"}
                    >
                        Welcome Page
                    </NavigationItem>   
                    <NavigationItem 
                        className={"navigationItem"}
                        path={"/tictactoe"}
                    >
                        TicTacToe3x3
                    </NavigationItem>   
                    <NavigationItem 
                        className={"navigationItem"}
                        path={"/tictactoe4x4"}
                    >
                        TicTacToe4x4
                    </NavigationItem>  
                </NavigationItems>
                {this.renderSideDrawer()}
                <Backdrop 
                    show={this.props.sideDrawerOpen === "Yes"}
                    onClick={() => this.props.sideDrawerIsOpen("No")}
                />
                <MenuButton
                    menuButtonHandler={() => this.props.sideDrawerIsOpen("Yes")}
                />
            </div>
        );
    }
}

export default connect(
    (state) => {
       return {
        sideDrawerOpen: state.sideDrawer.sideDrawerOpen
       };
    },
    (dispatch) => {
       return {
        sideDrawerIsOpen: bindActionCreators(Actions.sideDrawerOpen, dispatch),
       };
    }
)(withRouter(Toolbar));
 