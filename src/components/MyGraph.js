import React, {Component} from 'react';
import axios from "axios/index";
import {LineChart, XAxis, YAxis, CartesianGrid, Line} from 'recharts'

class MyGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {

            machineInfo: null,
        }
    }


    componentWillMount() {

        var self = this;
        axios.get(`http://35.232.7.184:8080/gethistory/${this.props.match.params.ip}`)
            .then(function (response) {
                console.log(response.data);




                if (response.data !== null) {
                    let readableData = []

                    for (let mykey in response.data) {
                        readableData.push({name: response.data[mykey].date.split(" ")[1],
                            value: parseInt(response.data[mykey].speed.split(" ")[0])})

                    }
                    self.setState({
                        data: readableData
                    });
                    console.log(readableData)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (
            <LineChart width={1000} height={300} data={this.state.data}>
                <XAxis dataKey="name"/>
                <YAxis dataKey='value'/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
            </LineChart>
        )


    }
}

export default MyGraph;
