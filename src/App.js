import React, {Component} from 'react';
import './App.css';
import Pinger from './components/Pinger';
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import MyGraph from './components/MyGraph'
import BoxesPage from "./BoxesPage";


class App extends Component {
    constructor(props) {
        super(props);
        /*        this.state = {
                    ip_list: null
                }*/
    }

    /*
        /!*(https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)*!/

        componentWillMount() {
            var self = this;
             axios.get('http://35.232.7.184:8080/getall')
            //axios.get('localhost:8080/getall')

                .then(function (response) {
                    // console.log("ayy", response.data);
                    if (response.data !== null){
                        self.setState({
                            ip_list: response.data,
                            length: response.data.length
                        });
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    */

    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/" component={BoxesPage}/>
                    <Route path="/graph/:ip" component={MyGraph}/>

                </div>


            </Router>
        );
    }
}


export default App;
