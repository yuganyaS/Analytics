import React,{Component} from 'react';



class Errorboundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(){
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){
            return(
                <div>OOPs...... User name contain null it seems </div>
            )
        }else{
            return this.props.children;
        }
        
        
    }
}

export default Errorboundary;