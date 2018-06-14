import React, {Component} from 'react';
import _ from "lodash";
import Card from './Card'

class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: null,
            ms: null,
            expandedArray: [],
            running:0,
            down:0,
            list_length: 0

        };

    }

    componentWillMount() {

    }



    totals() {
        // console.log(this.props.ip_list);
        if(this.props.ip_list) {
            // console.log(this.up_devices, this.down_devices, "hay", this.props.ip_list);
            if ((this.up_devices + this.down_devices) === this.props.ip_list.length) {
                this.setState({
                    running: this.up_devices,
                    down: this.down_devices,
                    list_length: this.props.list_length
                })
            }
        }
    }
    down_devices = 0;
    up_devices = 0;
    makeCard() {
        let things = [];
        let icon = null;
        let self = this;

        var total = 0;
        _.forEach(this.props.ip_list, function (value, key) {
            things.push(<Card value={value} key={key} />);
            total += 1;
            if(value.speed === "down"){
              self.down_devices += 1;
            }
            else{
             self.up_devices += 1
            }
        });
        this.totals();
        return things;

    }

    render() {
        if (this.state.ip_list !== null) {

        }
        return (
            <div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <p style={{fontWeight: "600", paddingRight: ".5vw", color: "green"}}>Running:</p>
                    <p style={{color: "green"}}>{this.state.running}</p>
                    <p style={{fontWeight: "600", paddingLeft: ".5vw", paddingRight: ".5vw", color: "red"}}>Unresponsive:</p>
                    <p style={{color: "red"}}>{this.state.down}</p>
                    <p style={{fontWeight: "600", paddingLeft: ".5vw", paddingRight: ".5vw"}}>Total Machines:</p>
                    <p>{this.state.list_length}</p>
                </div>
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
    iconStyle: {
        border: "solid 3px green"
    }
};
export default Machine;