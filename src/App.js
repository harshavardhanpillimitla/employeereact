import React,{Component} from 'react';
import Login from './components/login'
import Home from './components/home'
import Register from './components/register'
import PostDetail from './components/postdetail'
import NavBar from './components/navbar'
import {Route,Switch} from 'react-router-dom';
import AddPost from './components/addpost';
import PostUpdate from './components/postupdate';
import UserDetail from './components/userdetail';


class App extends Component
{
  componentDidMount()
  {
  }

  render(){
    return(
      <div>
        <NavBar/>
        
        <div>
          <Switch>
          <Route path="/userdetail/:id" component={UserDetail} />


          <Route path="/postdetail/:id" component={PostDetail} />
          <Route path="/postupdate/:id" component={PostUpdate} />
          <Route path="/addpost" component= {AddPost} />
          <Route path="/register" component= {Register} />
          <Route path='/home' component ={Home} />
          <Route path='/'  exact component ={Login} />
          </Switch>
          
        

         
         </div>
         
      </div>
     

    )
  }
};





export default App;
