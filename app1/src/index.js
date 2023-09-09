import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './seasonalDisplay';
import Loader from './loader';

class App extends React.Component{    
    constructor(props){
        super(props)
        this.state = {
            lat : null,
            errorMessage:''
        }                       
    }    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((response)=>{            
            this.setState({lat:response.coords.latitude});
        },(error)=>{                    
            this.setState({errorMessage:error.message});
        }); 
    }
    renderContent(){
        if(this.state.lat && !this.state.errorMessage){            
            return <SeasonalDisplay lat={this.state.lat}/>
        }else if(!this.state.lat && !this.state.errorMessage){            
            return <Loader message = "Please allow us to read the location"/> 
        }else if(!this.state.lat && this.state.errorMessage){            
            return <div>Error -: {this.state.errorMessage}</div>
        } 
    }
    render(){    
        return (<div>            
            {this.renderContent()}
        </div>)                                        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));