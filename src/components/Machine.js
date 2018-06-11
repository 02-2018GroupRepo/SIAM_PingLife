import React, { Component } from 'react';
import axios from 'axios';
import _ from "lodash";
const list = [
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "printer" },
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
    {'ip': '192.168.88.49', 'speed' : '1.5', type: "computer"},
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
        let icon = null;
        _.forEach(list, function(value){
            if (value.type === "printer"){
                icon = "images/printer.png"
            }
            else if (value.type === 'computer'){
                icon = "images/computer.png"
            }
            things.push(
                <div style={style.dataDiv}>
                    <img src={icon} alt=""/>
                    <h4>{value.ip}</h4>
                    <h5>{value.speed}</h5>
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
        color: "white",
        border: "solid 1px black",
        backgroundColor: "#FA6304",
        borderRadius: "5px",
        padding: 20,
        margin: 10,

    },
    outer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
        marginTop: 15,


    }
};
export default Machine;