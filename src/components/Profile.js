import React, { Component } from 'react';

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: {name: 'yuganya'}
        }
        
    }
    updatebuttonHandler= () =>{
        this.setState(state=>({ ...state, user: null }));
    }
  
    render(){
        if(this.state.user){
            return(
                <div>
                    Name : {this.state.user && this.state.user.name}
                    <button onClick={this.updatebuttonHandler}>Update</button>
                </div>
            )
        }
    }
}

export default Profile;