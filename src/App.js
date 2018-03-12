import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    inputChange = (node) =>{
      this.setState({
          inputValue:node.target.value
      })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div>
                    appName:
                    <div>{this.props.appName}</div>
                    <input type="text" placeholder='appName' onChange={this.inputChange}/>
                    <button onClick={() => {
                        this.props.changeState(this.state.inputValue)
                    }}>change state
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        changeState: (value) => {
            dispatch({type: 'changeState', data: value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
