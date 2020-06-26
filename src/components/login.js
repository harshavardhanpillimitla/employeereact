import React,{Component} from 'react';
import axios from 'axios';



class Login extends Component{
    state={
        name:'',
        email:'',
        password:''
    }
    
    onChange = e =>
    {
        this.setState({[e.target.id]:e.target.value})
    }
    onSubmit = async e =>
    {
        
        e.preventDefault();
        try{
        let data = this.state;
        const {data :jwt} = await axios.post('https://backendemployeeapi.herokuapp.com/auth/login/',data)
        localStorage.setItem('token',jwt.token);
        this.props.history.replace('/home')
        }
        catch(error)
        {
            console.log(error)
        }

        
        

    }


    render(){
        return(
            <div className="container ml-auto mr-auto mt-5">
                <div className="alert alert-info text-center ">Login</div>
            <form onSubmit={this.onSubmit.bind(this)}>
                
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.onChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" onChange={this.onChange}/>
                </div>
              
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            

        )
    }
}
export default Login;