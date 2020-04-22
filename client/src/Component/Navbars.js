import React , {Component} from 'react'
import {Link , withRouter} from 'react-router-dom'






class Navbars extends Component {


    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')

    }


    render(){

        const loginRegLink = (
            <ul className = "right navbar-nav">
                <li className=" nav-item">
                    <Link  to ="/login" className="nav-link">Login</Link>
                </li>

                <li className="nav-item">
                    <Link to ="/register" className="nav-link">Register</Link>
                </li>
            </ul>

        )

        const userLink = (
            <ul className = "right navbar-nav">
                
                <li className="nav-item" >
                <Link to ="/admin" className="nav-link">About Us</Link>
                </li>
            <li className="nav-item" >
            <Link to ="/addproduct" className="nav-link">Add Product</Link>
             </li>

             <li className="nav-item" >
             <Link to ="/product" className="nav-link">Product</Link>
              </li>

            <li className="nav-item">
             <Link to ="/profile" className="nav-link">User</Link>
            </li>


                <li className=" right nav-item">
                    <a style={{marginLeft:"1450px"}} href="/" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </li>
            </ul>

        )

        return( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse justify-contend-md-center" id="navbar1" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/" className="nav-link">Home</Link>
                    </li>
                </ul>
                {localStorage.usertoken ? userLink : loginRegLink}

            </div></nav> 
        )   
    }
}

export default withRouter(Navbars)