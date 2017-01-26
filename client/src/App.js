import React, { Component } from 'react';
import MenuBar from './MenuBar';
import './App.css';

//Temporary until Material UI fixes
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <div className="main-page">
                <MenuBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;
