import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



class Table extends Component {

    constructor(props) {
      super(props)
      this.delete = this.delete.bind(this);
    }

    delete(){
        axios.delete('/product/delete/'+this.props.obj._id)
        .then(result=>{
            console.log(result)
            window.location.reload(); 
        }).catch(error=>{
            console.log(error)
        })

    }
    
  render() {
    return (
      
      <tr>
        <td>{this.props.obj.productName}</td>
        <td>{this.props.obj.productPrice}</td>
        <td>{this.props.obj.productDate}</td>
        <td>
        <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>            
        <button onClick={this.delete} className="btn btn-danger">Delete</button>        
        </td>


      </tr>

        
      
    )
  }
}

export default Table
