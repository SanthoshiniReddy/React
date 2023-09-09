import React, { Component } from 'react';

class ReductIntro extends Component {
    state = {  }
    render() { 
        return ( <div>
            {`Welcome to ${this.props.tech}`}
        </div> );
    }
}
 
export default ReductIntro;