import React,{Component} from 'react';
import axios from 'axios';





class UserDetail extends Component{
    state={
     
        


    }
    componentDidMount()
    {
    
        try{
            const id = this.props.match.params.id;
        console.log(id)
        const jwt = localStorage.getItem("token");
    
        const config = {
            headers : {
                'Content-Type': 'application/json',
                 Authorization : `JWT ${jwt}`
            }
        }
         axios.get(`https://backendemployeeapi.herokuapp.com/users/${id}/`,config)
         .then(res => {
              //const {name,user,picture,layitude,longitutude} = res.data;
              this.setState(res.data);
              console.log(res.data)

         })
    }catch(ex)
    {

    }
       
    }
    

    render(){
        return(
            <div className="col-6">

            <div className="alert alert-info">
                <div className="container " style={{minHeight:'300'}}>
                <div className="row">
                    <div className="col-6">
                    <div >email: {this.state.email}</div>
                        

                    </div>
                    <div className="col-6">
                       
                        <div >coordinates:</div>
                        <div >first_name : {this.state.first_name}</div>
                        <div >seccond_name : {this.state.second_name}</div>
                       
                        
                        
                        
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        )
    }
}
export default UserDetail;