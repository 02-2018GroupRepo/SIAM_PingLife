import React, {Component} from 'react';
import _ from "lodash";
import Card from './Card'

class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: null,
            ms: null,
            expandedArray: []
        }
    }

    componentWillMount() {

    }



    makeCard() {
        let things = [];
        let icon = null;
        let self = this;
        _.forEach(this.props.ip_list, function (value, key) {
            things.push(<Card value={value} key={key} />);
        });
        return things;
    }

    render() {
        if (this.state.ip_list !== null) {

        }
        return (
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
    iconStyle: {
        border: "solid 3px green"
    }
};
export default Machine;