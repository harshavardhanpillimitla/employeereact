import React,{Component} from 'react';
import axios from 'axios';



class PostUpdate extends Component
{
    state={
        name:"",
        latitude:0.0,
        longitutude:0.0,
        picture:null,
        id:0
    
      }
      componentDidMount()
      {
                    try{
                    const id = this.props.match.params.id
                    const jwt = localStorage.getItem("token");
                    
                    const config = {
                        headers : {
                            'Content-Type': 'application/json',
                            Authorization : `JWT ${jwt}`
                        }
                    }
                    
                    axios.get(`https://backendemployeeapi.herokuapp.com/post/${id}/`,config)
                    .then(res => {
                            
                            console.log("stare",res.data)
                            this.setState(res.data);
                
                    })
                }catch(ex)
                {
                    alert("error")
                
                }

      }
    onChange = e =>
    {
        this.setState({[e.target.id]:e.target.value})
    }
    onChangeImage = e =>
    {
        this.setState({picture:e.target.files[0]})

    }

    onSubmit = e => {
       
        e.preventDefault();
        
        


        try{

            const {name,latitude,longitutude}=this.state;
            e.preventDefault();
            console.log(this.state);
            let form_data = new FormData();
            form_data.append('picture',this.state.picture,this.state.picture.name);
            form_data.append("name",name);
            form_data.append("latitude",latitude);
            form_data.append("longitutude",longitutude);

           
            
            
            
            const jwt = localStorage.getItem("token");
           
            const config = {
                headers : {
                    'content-type': 'multipart/form-data',
                     Authorization : `JWT ${jwt}`
                }
            }
             axios.patch('http://localhost:8000/post/',form_data,config)
             .then(res => {
                  
                  this.setState({data:res.data});
                  alert("post tried to update");
                  this.props.history.replace("/home");

    
             })

             
        }catch(ex)
        {
    
        }
        



    }


    render(){
        return(
            <div className="container ml-auto mr-auto mt-5">
                <div className="alert alert-info text-center ">Add Post</div>
            <form encType="multipart/form-data" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={this.state.name} onChange={this.onChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group">
                    <label for="exampleInputPassword1">Picture</label>
                    <input type="file" className="form-control" id="picture" onChange={this.onChangeImage}/>
                </div>
                <input type="submit"/>
     
            </form>
            </div>

        )
    }
}

export default PostUpdate;