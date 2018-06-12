import React, { Component } from 'react';
import _ from "lodash";
class Machine extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip: null,
            ms: null,
        }
    }
    componentWillMount(){

    }
    makeCard() {
        let things = [];
        let icon = null;
        _.forEach(this.props.ip_list, function(value, key){
            if (value.devicetype === "Printer"){
                icon = "images/printer.png"
            }
            else if (value.devicetype === 'Windows Computer'){
                icon = "images/computer.png"
            }
            else if (value.devicetype === "iPhone"){
                icon = "images/iphone.png"
            }
            things.push(
                <div key={key} style={style.dataDiv}>

                        <img src={icon} alt="" className="deviceIcon"
                             style={
                                 value.speed === "down" ? (
                                     {
                                         border:"solid 1.5px red"
                                     }
                                 ) : (
                                     {border:"solid 1.5px green"})
                             }/>

                    <h4>{"IP  " + value.ipAddress}</h4>
                    <h4>{"Device Type  " +  value.devicetype}</h4>
                    <h5>{"Ping Speed " + value.speed}</h5>


                </div>
            )
        });
        return things;
    }
    render(){
        if (this.state.ip_list !== null){
            console.log(this.state.ip_list);
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
        borderRadius: "10px",
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