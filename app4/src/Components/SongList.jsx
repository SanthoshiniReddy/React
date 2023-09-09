import React, { Component } from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    state = {  }
    render() { 
        return ( <div>SongList</div> );
    }
}
 
export default connect()(SongList);