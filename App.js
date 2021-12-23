import React, { Component } from "react"

class Welcome extends Component {
  render() {
    return <>
            <h1>Hey {this.props.name}!</h1>;
            <h2>Welcome to Newton School.</h2>
    </>        
  }
}

export default Welcome
