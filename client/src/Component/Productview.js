import React, { Component } from 'react'
import Table from './Table'
import axios from 'axios'

class Productview extends Component {

  constructor(props) {
    super(props)
  
    this.state = { product : []  
    }
  }
  
  componentDidMount(){
    axios.get('product/view')
    .then(res=>{
      this.setState({product:res.data})
    })
    .catch(error=>{
      console.log(error)
    })
  }

  Table(){
    return this.state.product.map((obj,i)=>{
      return <Table obj={obj} key={i}/>
    })
  }

  render() {
    return (
      <div>

      <table className="table table-striped">
      <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Price(100g)</th>
        <th>Product Date</th>
        <th>Action</th>
      </tr>

      </thead>
      <tbody>
      {this.Table()}
      </tbody>
      </table>  
    </div>
    )
  }
}

export default Productview
