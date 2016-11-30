import React, { Component } from 'react';
import MenuBar from './MenuBar';

class App extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;
