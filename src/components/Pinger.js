import React, { Component } from 'react';
import axios from 'axios';
import _ from "lodash";
const list = [
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        {'ip': '192.168.88.49', 'speed' : '1.5' },
        ];
class Pinger extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip: null,
            ms: null,
        }
    }
    componentWillMount(){
        var self = this;
        axios.get('http://35.199.33.29:8081/')
            .then(function (response) {
                console.log("ayy", response.data);

                // self.setState({
                //
                // });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
     makeCard() {
        let things = [];
        _.forEach(list, function(value){
            things.push(<div>
                <h3>{value.ip}</h3>
                <h5>{value.speed}</h5>
            </div>)
        });
         return things;
     }
    render(){
        if (this.state.list !== null){
            console.log(this.state.list);
        }
        return(
            <div>
                {this.makeCard()}
            </div>
        )
    }
}
const style = {
    pingDiv: {

    }
};
export default Pinger;