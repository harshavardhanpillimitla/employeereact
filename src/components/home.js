import React,{Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Post from './post';
import {Route,Switch} from 'react-router-dom'




class Home extends Component{
    state={
       data:[]
        


    }
    componentDidMount()
    {
        try{
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        const config = {
            headers : {
                'Content-Type': 'application/json',
                 Authorization : `JWT ${jwt}`
            }
        }
         axios.get('http://localhost:8000/post/',config)
         .then(res => {
              //const {name,user,picture,layitude,longitutude} = res.data;
              this.setState({data:res.data});

         })
    }catch(ex)
    {

    }
       
    }
    

    render(){
        return(
            <div className="container mt-5">

                <div className="row">
                    {this.state.data.map(post => <Post post={post} />)}

                </div>

             

            </div>
            


        )
    }
}
export default Home;