/**
 * Created by macbook-yang on 10/10/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {helloWorld} from './Actions';

class App extends React.Component {
    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked = (e) => {
        this.props.dispatch(helloWorld(e.target.value));
    };

    render(){
        return(
            <div>
                <fieldset className={'margin-bottom'}>
                    <legend>Saga Remote Api Example</legend>
                    <p className={'margin-bottom'}><span><strong>Response</strong>: </span> {this.props.helloWorld}</p>
                    <p><button onClick={this.buttonClicked} value='Button Clicked!!!'>Click Me!!!</button></p>
                </fieldset>

                <fieldset>
                    <legend>'data-' attribute: param1</legend>
                    <p>{this.props.param1}</p>
                </fieldset>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch, ownProps){
    return {
        dispatch:dispatch
    }
}

function mapStateToProps(state, ownProps){
    return {
        helloWorld: state.message,
        param1: state.param1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
