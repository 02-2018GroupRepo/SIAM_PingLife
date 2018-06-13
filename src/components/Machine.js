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
            down:0
        };

    }

    componentWillMount() {

    }


    down_devices = 0;
    up_devices = 0;
    totals() {
        console.log(this.up_devices, this.down_devices, "hay", this.props.ip_list);
        if((this.up_devices + this.down_devices) === this.props.ip_list){
            this.setState({
                running: this.up_devices,
                down: this.down_devices
            })
        }
    }
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
                <p>{"Running: " + this.state.running + " Unresponsive: " + this.state.down}</p>
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