import React, { Component } from 'react';
import './App.css';
import Pinger from './components/Pinger';
import axios from "axios";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            ip_list: null
        }
    }
    componentWillMount(){
        var self = this;
        axios.get('http://104.198.252.163/getall')
            .then(function (response) {
                // console.log("ayy", response.data);
                if (response.data !== null){
                    self.setState({
                        ip_list: response.data
                    });
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
          <Pinger ip_list={this.state.ip_list}/>
      </div>
    );
  }
}
const style = {
    flexer: {
        paddingHorizontal: 10,
        display: "flex",
        justifyContent: "space-around",
        width: "70vh"
    }
};

export default App;
