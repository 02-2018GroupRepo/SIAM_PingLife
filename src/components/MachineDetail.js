import React, { Component } from 'react';


class MachineDetail extends Component{
    constructor(props){
        super(props);
        this.state = {

            machineInfo: null,
        }
    }
    componentWillMount(){

    }

    render(){
        console.log("hello",this.props.ip_list);
        return(
            <div>
               <div>
                   <h3>Machines at Location X</h3>
               </div>
                
            </div>

        )
    }
}
const style = {

    };

export default MachineDetail;