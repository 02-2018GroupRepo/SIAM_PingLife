import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pinger from './components/Pinger';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="flex-header" style={style.flexer}>
                {/*<h4><a href="" target="none">Link 1</a></h4>*/}
                <h3>IP Speeds</h3>
                <h3>Graph</h3>
                <h3>Location</h3>
                <h3>Detail</h3>
            </div>
        </header>
          <Pinger/>
      </div>
    );
  }
}
const style = {
    flexer: {
        paddingHorizontal: 5,
        display: "flex",
        justifyContent: "space-around",
        width: "30vw"
    }
};

export default App;
