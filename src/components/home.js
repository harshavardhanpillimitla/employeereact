import React,{Component} from 'react';


import Post from './post';
import {connect } from 'react-redux';
import {posts} from '../store/postSlice'





class Home extends Component{
    state={
       data:[]
        


    }
    componentDidUpdate()
    {    
        alert(this.props.isAuthenticated)
        if(!this.props.isAuthenticated)
        {
            this.props.history.replace('/')
            
            

        }
    }
    componentDidMount()
    {
        
        const jwt = this.props.user.token;
        
     
       
   
        try{
       
        
        if(jwt)
        {
        
   
    
        const dispatch = this.props.dispatch;
      
              
        dispatch(posts({
                    'Content-Type': 'application/json',
                     Authorization : `JWT ${jwt}`
                }));
            }
        

    }catch(ex)
    {
        console.log(ex)

    }
       
    
}
    

    render(){
   
        return(
            <div className="container mt-5">

                <div className="row">
                    {this.props.state.map(post => <Post post={post} />)}

                </div>

             

            </div>
            


        )
    }
}


const mapStateToProps = state => {
    return {
        state:state.list,
        user:state.user,
        isAuthenticated:state.isAuthenticated
        
    }
  };
  const mapDispatchToProps = dispatch =>  {
    return {
        dispatch:dispatch
    }
  
     
  };

export default connect(mapStateToProps,mapDispatchToProps)(Home);