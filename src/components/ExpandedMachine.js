import React, {Component} from 'react';

class ExpandedMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceName: "N/A"
        }
    }
    componentWillMount(){
        if(this.props.value.devicename){
            this.setState({
                deviceName: this.props.value.devicename
            })
        }

    }

    render() {
        if (this.props.value) {
            return (
                <div>
                    <div style={{borderBottom: "2px solid black",color: "black", backgroundColor: "white"}}>
                        <h5 style={{margin: "1vh", fontWeight: "400"}}>More Info</h5>
                    </div>
                    <h5>First Scanned
                        <p style={{fontWeight: '300', fontSize: ".8em"}}>{this.props.value.firstscanned}</p>
                    </h5>


                    <h5>Device Name
                        <p
                        style={{fontWeight: '300', fontSize: ".8em"}}>{this.state.deviceName}</p>
                    </h5>

                </div>
            )
        }
        else {
            return (
                <div>
                    <p>No Data</p>
                </div>
            )
        }


    }
}

export default ExpandedMachine;