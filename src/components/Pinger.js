import React, { Component } from 'react';
import Machine from './Machine'

class Pinger extends Component{
    constructor(props){
        super(props);
        this.state = {

            ip_list: null,
        }
    }
    componentWillMount(){

    }

    render(){
        console.log("hello",this.props.ip_list);
        return(
            <div style={style.cardsOuter}>
               <div>
                   <h3>Machines at Location X</h3>
               </div>
                <Machine ip_list={this.props.ip_list}/>
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