import React, { Component } from 'react';
import axios from 'axios';
import _ from "lodash";
import Machine from './Machine'
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
            list: null,
        }
    }
    componentWillMount(){
        // var self = this;
        // axios.get('http://35.199.33.29:8081/')
        //     .then(function (response) {
        //         console.log("ayy", response.data);
        //
        //         // self.setState({
        //         //
        //         // });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render(){
        if (this.state.list !== null){
            console.log(this.state.list);
        }
        return(
            <div style={style.cardsOuter}>
               <div>
                   <h3>Mahines at Location X</h3>
               </div>
                <Machine/>
            </div>

        )
    }
}
const style = {
    cardsOuter: {
        minHeight: "90vh",
     backgroundColor: "#96939B"

    },
    outer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap',
        marginTop: 15,


    }
};
export default Pinger;