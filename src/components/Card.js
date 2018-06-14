import React, {Component} from 'react';
import _ from "lodash";
import ExpandedMachine from "./ExpandedMachine";
import axios from 'axios'
import {
    BrowserRouter as Router,
        Route,
        Link
} from 'react-router-dom'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speedLabel: this.props.value.speed,
            show: false

        }

        setInterval(() => {
            axios.get(`http://35.232.7.184:8080/getonespeed/${this.props.value.ipAddress}`)
                .then((response) => {
                        // this.props.speedLabel = response.data
/*                        this.this.props.value.speed = "hooey"
                        console.log('props changed')
                        forceUpdate()*/
this.setState({
    speedLabel: response.data

})
                    }
                )
        }, 1000 * 60)

    }

    componentDidUpdate() {
        if (this.state.speedLabel === "down" || this.state.speedLabel === "unknown") {
            this.setState({
                speedLabel: "Unresponsive"
            })
        }

    }

    expanded(value) {
        if (this.state.show) {
            return (
                <ExpandedMachine value={value}/>
            )
        }

    }


    render() {
        let icon = "";
        let name = JSON.stringify(this.props.value.deviceName);
        if (this.props.value.devicetype === "Printer") {
            icon = "images/printer.png"
        }
        else if (this.props.value.devicetype === 'Windows Computer') {
            icon = "images/computer.png"
        }
        else if (this.props.value.devicetype === "iPhone") {
            icon = "images/iphone.png"
        }
        // else if(this.name.includes("MACBOOK")){
        //     icon = "images/computer.png"
        // }
        else {
            icon = "images/notFound.png"
        }
        return (
            <div>
                <div style={style.dataDiv}>

                    <Link to={`/graph/${this.props.value.ipAddress}`} target='_blank' ipAddress={this.props.value.ipAddress}><img src={icon} alt="" className="deviceIcon"
                         style={
                             this.props.value.speed === "down" ? (
                                 {
                                     border: "solid 1.5px red"
                                 }
                             ) : (
                                 {border: "solid 1.5px green"})
                         }/></Link>

                    <h5>{"IP  " + this.props.value.ipAddress}</h5>
                    <div style={{paddingRight: '3vw', paddingLeft: "3vw"}}>
                        <h3>Device Type <p
                            style={{fontWeight: '400', fontSize: ".7em"}}>{this.props.value.devicetype}</p></h3>

                    </div>


                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <h5>{this.state.speedLabel}</h5>

                        <img onClick={() => {
                            this.state.show !== true ?
                                this.setState({
                                    show: true
                                })
                                :
                                this.setState({
                                    show: false
                                });
                            this.expanded(this.props.value)
                        }} src={"images/dots.png"} style={{maxHeight: "12px"}}/>
                    </div>
                    <div>
                        {this.expanded(this.props.value)}
                    </div>

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
    iconStyle: {
        border: "solid 3px green"
    }
};
export default Card;









