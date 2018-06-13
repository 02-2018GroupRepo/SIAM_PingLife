import React, { Component } from 'react';

class ExpandedMachine extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){

    }

    render(){
        if(this.props.value){
            return(
                    <div style={{backgroundColor: this.props.expanded}}>
                        <h3>More Info</h3>
                        {/*<p>{this.props.value.speed}</p>*/}
                        <p>{this.props.value.firstscanned}</p>
                        {/*<p>{this.props.value.type}</p>*/}
                    </div>
            )
        }
        else {
            return(
                <div>
                    <p>No Data</p>
                </div>
            )
        }




    }
}

export default ExpandedMachine;