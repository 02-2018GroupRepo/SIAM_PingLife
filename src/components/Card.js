import React, {Component} from 'react';
import _ from "lodash";
import ExpandedMachine from "./ExpandedMachine";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: null,
            ms: null,
            show: false
        }
    }

    componentWillMount() {

    }

    expanded(value) {
        console.log(value);
        if(this.state.show){
            return (
                <div>
                    <p>hello</p>
                </div>
                // {/*<ExpandedMachine value={value}/>*/}
            )
        }

    }


    render() {
        let icon = "";
        if (this.state.ip_list !== null) {

        }
        if (this.props.value.devicetype === "Printer") {
            icon = "images/printer.png"
        }
        else if (this.props.value.devicetype === 'Windows Computer') {
            icon = "images/computer.png"
        }
        else if (this.props.value.devicetype === "iPhone") {
            icon = "images/iphone.png"
        }
        else {
            icon = "images/notFound.png"
        }
        return (
            <div>
                <div  style={style.dataDiv}>

                    <img src={icon} alt="" className="deviceIcon"
                         style={
                             this.props.value.speed === "down" ? (
                                 {
                                     border: "solid 1.5px red"
                                 }
                             ) : (
                                 {border: "solid 1.5px green"})
                         }/>

                    <h5>{"IP  " + this.props.value.ipaddress}</h5>
                    <div style={{paddingRight: '3vw', paddingLeft: "3vw"}}>
                        <h4>Device Type <p
                            style={{fontWeight: '300', fontSize: ".8em"}}>{this.props.value.devicetype}</p></h4>
                        <h4>First Scanned <p
                            style={{fontWeight: '300', fontSize: ".8em"}}>{this.props.value.firstscanned}</p></h4>
                    </div>


                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <h5>{"Speed " + this.props.value.speed}</h5>

                        <img onClick={() => {
                            this.setState({
                                show: true
                            });
                          this.expanded(this.props.value)
                        }} src={"images/dots.png"} style={{maxHeight: "12px"}}/>
                    </div>
                    <div>
                        {this.expanded()}
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









