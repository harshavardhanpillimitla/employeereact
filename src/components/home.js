import React,{Component} from 'react';
import axios from 'axios';

import Post from './post';





class Home extends Component{
    state={
       data:[]
        


    }
    componentDidMount()
    {
        try{
        const jwt = localStorage.getItem("token");
   
        const config = {
            headers : {
                'Content-Type': 'application/json',
                 Authorization : `JWT ${jwt}`
            }
        }
         axios.get('https://backendemployeeapi.herokuapp.com/post/',config)
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