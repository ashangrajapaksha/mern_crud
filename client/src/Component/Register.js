import React, {Component} from 'react'
import {register} from './Userfunction'
import './Register.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const initialState = {
            first_name :'',  
            last_name: '',
            email: '',
            password: '',
            emailError:'',

}
class Register extends Component{

    constructor(props){
        super(props)

        this.state = {initialState
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    validate = () =>{

        let emailError = "";

        if(!this.state.email.includes('@gmail.com')){
            emailError = "Invalid Email"
        }

        if(emailError){
            this.setState({emailError})
            return false
        }

        return true

        


    };
 
    onSubmit(e){
        e.preventDefault()

        const isValid = this.validate();
        const user = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            email : this.state.email,
            password : this.state.password
        }

        if(isValid){
            console.log(this.state)
            this.setState(initialState)

            register(user)
            .then(res=>{
                this.props.history.push('/login')
        })
        }
        
    }

    render(){ 
        return(

            <Card className="cardm">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto" >
                    <h1 className=" h3 mb-3 font-weight-normal">Please sing in</h1>
                            
                        <form noValidate onSubmit = {this.onSubmit}>
                            

                            <div className="formm-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" className="form-control" name="first_name" placeholder="Enter First name" value={this.state.first_name} onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" className="form-control" name="last_name" placeholder="Enter Last name" value={this.state.last_name} onChange={this.onChange}/>
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange}/>
                            <div style={{fontSize:15 ,color:"red",textAlign:"center"}}>
                            {this.state.emailError}
                            </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                            
                            
                            <button type="submit" className="btn btn-lg btn-primary  btn-block"> Sign in </button>

                            
                            
                        </form>
                        
                    </div>
                </div>
            </div>
            </Card>

        )
    }
     
}

export default Register