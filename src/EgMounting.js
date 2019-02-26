import React, { Component } from 'react';

class EgMounting extends Component {
    constructor(props) {
         super(props);
         // Don't do this!
         this.state = { color: 'green' };
    }
    componentWillMount() {
      console.log("componentWillMount da chay")
    }

    componentDidMount() {
        console.log("componentDidMount da chay")
    }
    
    render() {
        console.log("Ham render da duoc chay");
        return (
           <div>
              <button onClick={() =>  this.setState({color : 'aaaaa'})}>Submit</button>
                <p>{this.state.color}</p>
            </div> 

        )
    }
}

export default EgMounting;