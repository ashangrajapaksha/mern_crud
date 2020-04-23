import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import axios from 'axios'




 class Editproduct extends Component {



    constructor(props) {
      super(props)

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    
      this.state = {
        productName:'',
        productPrice:'',
        productDate:''
         
      }
     
    }

    componentDidMount() {
        axios.get('/product/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    productName:response.data.productName,
                    productPrice:response.data.productPrice,
                    productDate:response.data.productDate });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
    
    onChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    onSubmit(event){
      event.preventDefault()
      console.log("nbdskfn")
      const pro = {
        productName:this.state.productName,
        productPrice:this.state.productPrice,
        productDate:this.state.productDate
      }

      axios.post('/product/update/'+this.props.match.params.id,pro)
      
      .then(res=>{
        console.log(res.data)
        this.props.history.push('/product');

      }).catch(error=>{
        console.log(error)
      })
    }

    
    


  render() {
    return (
      <div className="container">
      <Card className="cards">

      <div className="row" >
      <div className="col-md-6 mt-5 mx-auto">
      <form onSubmit = {this.onSubmit}>

      <h2 className="heding">New Product Add Form</h2>
      <hr/>

      <div className="form-group">
      <label className="lbl" htmlFor="product_name">Product Name</label>
      <input type="text" className="form-control" name="productName" value={this.state.productName} onChange={this.onChange}/>
      </div>

      <div className="form-group">
      <label className="lbl" htmlFor="productPrice">Product Price</label>
      <input type="number" className="form-control" name="productPrice" value={this.state.productPrice} onChange={this.onChange}/>
      </div>
      
      <div className="form-group">
      <label className="lbl" htmlFor="productDate">Date</label>
      <input type="date" className="form-control" name="productDate" value={this.state.productDate} onChange={this.onChange}/>
      </div>
      
      <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
      </div>
      </div>
      </Card>
        
      </div>
    )
  }
}

export default Editproduct
