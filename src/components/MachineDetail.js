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