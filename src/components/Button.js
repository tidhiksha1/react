import React, { Component } from 'react'

export class Button extends Component {
    constructor(props){
        super();
        this.state = {
            title:"Click Me",
            appName:"React Js State Application",
            users:{
                "id":1,
                "name":"Sanndeip Midhilesh",
                "address":"Visakhapatnam",
            }
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.appName}</h1><br/>
        <h2>User Id: {this.state.users.id}</h2>
        <h2>User Name: {this.state.users.name}</h2>
        <h2>User Address: {this.state.users.address}</h2>
        <button className='btn btn-primary'>{this.props.title}</button><br/>
        
      </div>
    )
  }
}

export default Button
