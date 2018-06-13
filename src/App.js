import React, {Component} from 'react';
import './App.css';
import Pinger from './components/Pinger';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_list: null
        }
    }

    componentWillMount() {
        var self = this;
        axios.get('http://localhost:8080/getall')
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
                    <div className="flex-header" style={style.flexer}>
                        {/*<h4><a href="" target="none">Link 1</a></h4>*/}
                        <h3 style={{marginRight: "2vw", marginLeft: "2vw"}}>Network Devices</h3>
                        <h3>History Graph</h3>
                    </div>
                    <div className="flex-header" style={{display: "flex"}}>
                        <h2 style={{color:"white", fontWeight:"500"}}>Syntel Infrastructure Alert Management System</h2>
                    </div>
                </header>
                <div style={{marginTop: "2vh"}}>{"Total Machines: " + this.state.length}</div>
                <Pinger ip_list={this.state.ip_list}/>
            </div>
        );
    }
}

const style = {
    flexer: {
        paddingHorizontal: 10,
        display: "flex",
        justifyContent: "flex-start",
        width: "55vw"

    }
};

export default App;
