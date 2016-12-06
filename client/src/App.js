import React, { Component } from 'react';
import MenuBar from './MenuBar';
//Temporary until Material UI fixes
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
