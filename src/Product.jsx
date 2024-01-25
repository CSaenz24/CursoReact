import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
       <h1>{this.props.title}</h1> 
       <p>$ {this.props.precio}</p>
      </div>
    )
  }
}

export default Product

