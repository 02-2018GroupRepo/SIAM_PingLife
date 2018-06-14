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

class BoxesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_list: null
        }
    }



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

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <div className="flex-header-left">
                            {/*<h4><a href="" target="none">Link 1</a></h4>*/}
                            <h5 style={{marginRight: "2vw", marginLeft: "2vw"}}>Network Devices</h5>
                            <h5>History Graph</h5>
                        </div>
                        <div className="flex-header-right" style={{display: "flex"}}>
                            <h4 style={{color:"white", fontWeight:"500"}}>Syntel Infrastructure Alert Management System</h4>
                        </div>
                    </header>

                    <Pinger ip_list={this.state.ip_list} list_length={this.state.length}/>
                </div>
        );
    }

}
export default BoxesPage