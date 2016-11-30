import React, { Component } from 'react';
import {Link} from 'react-router';
import './MenuBar.css';

function MenuItem(props) {
    return(
        <li className="MenuItem">
            <Link to={props.link}>{props.name}</Link>
        </li>
    );
}

// TODO: get these from server somewhere
var menuItems = [
    {"name": "Gooville", "link": "/"},
    {"name": "Top", "link": "/top"},
    {"name": "Critiques", "link": "/critiques"},
    {"name": "Discover", "link": "/discover"}
];
class MenuBar extends Component {
    render() {
        return (
            <div className="MenuBar">
                <ul className="MenuItems">
                    {menuItems.map((menuItem) => 
                        <MenuItem key={menuItem.name} name={menuItem.name} link={menuItem.link} />
                    )}
                </ul>
                <Link to="/submit" className="Submit">Submit</Link>
            </div>
        );
    }
}

export default MenuBar;
