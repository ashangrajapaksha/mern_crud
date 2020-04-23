import React , {Component} from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'

import Navbars from './Component/Navbars'
import Landing from './Component/Landing'
import Login from './Component/Login'
import Register from './Component/Register'
import Profile from './Component/Profile'
import Adminpanel from './Component/Adminpanel';
import Addproduct from './Component/Addproduct'
import Productview from './Component/Productview'
import Editproduct from './Component/Editproduct'

class App extends Component {
  render(){

    return(
      <Router>
        <div className="App">
        <Navbars/>
        
        <Route exact path="/" component={Landing}/>
        <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/admin" component={Adminpanel}/>
          <Route exact path="/addproduct" component={Addproduct}/>
          <Route exact path="/product" component={Productview}/>
          


          <Switch>
          
          <Route path='/edit/:id' component={ Editproduct } />
        
      </Switch>
        </div>
        </div> 
      </Router> 
    )
  }
}


  


export default App;
