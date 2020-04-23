import React , {Component} from 'react'
import {Link , withRouter} from 'react-router-dom'
import './Navbar.css'






class Navbars extends Component {


    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')

    }


    render(){

        const loginRegLink = (
            <ul className = "navbar-nav ml-auto">
                <li className=" nav-item">
                    <Link  to ="/login" className="nav-link">Login</Link>
                </li>

                <li className="nav-item">
                    <Link to ="/register" className="nav-link">Register</Link>
                </li>
            </ul>

        )

        const userLink = (
            <ul className = " navbar-nav ml-auto">
                
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

                <div className="topnav-right">
                <li className="nav-item ">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </li>
                </div>
            </ul>

        )

        return( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>

            <div  >
                <ul className=" navbar-nav ml-auto float-md-left">
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