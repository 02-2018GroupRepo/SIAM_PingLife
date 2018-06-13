import React, {Component} from 'react';
import './App.css';
import Pinger from './components/Pinger';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_list: [
                {
                    ipaddress: "192.168.88.165",
                    devicetype: "iPhone",
                    devicename: "unknown",
                    speed: "67 Mbps",
                    firstscanned: "Tue Jun 11 13:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Windows Computer",
                    devicename: "unknown",
                    speed: "45 Mbps",
                    firstscanned: "Mon Jun 10 13:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Printer",
                    devicename: "unknown",
                    speed: "down",
                    firstscanned: "Sun Jun 9 13:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Windows Computer",
                    devicename: "unknown",
                    speed: "112 Mbps",
                    firstscanned: "Tue Jun 12 10:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Windows Computer",
                    devicename: "unknown",
                    speed: "112 Mbps",
                    firstscanned: "Tue Jun 12 20:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "iPhone",
                    devicename: "unknown",
                    speed: "down",
                    firstscanned: "Tue Jun 12 14:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "iPhone",
                    devicename: "unknown",
                    speed: "49 Mbps",
                    firstscanned: "Tue Jun 12 12:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Windows Computer",
                    devicename: "unknown",
                    speed: "78 Mbps",
                    firstscanned: "Tue Jun 12 11:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "unknown",
                    devicename: "unknown",
                    speed: "down",
                    firstscanned: "Tue Jun 12 09:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "Windows Computer",
                    devicename: "unknown",
                    speed: "100 Mbps",
                    firstscanned: "Tue Jun 12 08:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "iPhone",
                    devicename: "unknown",
                    speed: "109 Mbps",
                    firstscanned: "Tue Jun 12 17:25:07 EDT 2018"
                }, {
                    ipaddress: "192.168.88.165",
                    devicetype: "iPhone",
                    devicename: "unknown",
                    speed: "98 Mbps",
                    firstscanned: "Tue Jun 12 18:25:07 EDT 2018"
                }
            ]
        }
    }

    componentWillMount() {
        // var self = this;
        // axios.get('http://104.198.252.163/getall')
        //     .then(function (response) {
        //         // console.log("ayy", response.data);
        //         if (response.data !== null){
        //             self.setState({
        //                 ip_list: response.data
        //             });
        //         }
        //
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
