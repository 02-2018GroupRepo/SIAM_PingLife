import React, { Component } from 'react';
import axios from 'axios';
import _ from "lodash";
const list = [
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : "N/A", type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : "N/A", type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : "N/A", type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},

];
class Machine extends Component{
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

                self.setState({

                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    makeCard() {
        let things = [];
        let icon = null;
        _.forEach(list, function(value, key){
            if (value.type === "printer"){
                icon = "images/printer.png"
            }
            else if (value.type === 'computer'){
                icon = "images/computer.png"
            }
            things.push(
                <div key={key} style={style.dataDiv}>

                        <img src={icon} alt="" className="deviceIcon"
                             style={
                                 value.speed === "N/A" ? (
                                     {
                                         border:"solid 1.5px red"
                                     }
                                 ) : (
                                     {border:"solid 1.5px green"})
                             }/>

                    <h4>{"IP  " + value.ip}</h4>
                    <h5>{"Ping Speed " + value.speed}</h5>

                </div>
            )
        });
        return things;
    }
    render(){
        if (this.state.list !== null){
            console.log(this.state.list);
        }
        return(
            <div>

                <div style={style.outer}>
                    {this.makeCard()}
                </div>
            </div>

        )
    }
}
const style = {
    dataDiv: {
        color: "black",
        border: "solid 1px black",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: 20,
        margin: 10,

    },
    outer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
        marginTop: 15,


    },
    iconStyle:{
        border:"solid 3px green"
    }
};
export default Machine;