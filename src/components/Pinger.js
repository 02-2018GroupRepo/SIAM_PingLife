import React, { Component } from 'react';
import axios from 'axios';

class Pinger extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip: null,
            ms: null
        }
    }
    componentWillMount(){
        var self = this;
        axios.get('http://35.199.33.29:8081/')
            .then(function (response) {
                console.log("ayy", ßresponse.data);

                self.setState({
                    ip: response.data["192.168.88.49"],
                    ms: Object.keys(response.data)
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        console.log(this.state.ms);
        console.log(this.state.ip);
        return(
            <div>
                {this.state.ip}
                <br/>
                {this.state.ms}
            </div>
        )
    }
}
const style = {
    pingDiv: {

    }
};
export default Pinger;