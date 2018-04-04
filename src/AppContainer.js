import React from 'react';
import {render} from 'react-dom';
import App from './App';

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

export default AppContainer;
