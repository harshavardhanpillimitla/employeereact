import React,{Component} from 'react';

import {Link} from 'react-router-dom';
import logo  from './logo192.png'


class Post extends Component{
    render(){
        const {id,name,user,picture,latitude,longitutude} = this.props.post;
        let postdetailurl = "/postdetail/"+id;
        let postupdateurl = "/postupdate/"+id;
        let userdetailurl = '/userdetail/'+id;
        return(
        <div className="col-6">

            <div className="alert alert-info">
                <div className="container " style={{minHeight:'300'}}>
                <div className="row">
                    <div className="col-6">
                        
                        <img src={picture}  alt={logo} className="container"/>

                    </div>
                    <div className="col-6">
                        <div ><Link to ={postdetailurl} >name : {name}</Link></div>
                        <div ><Link to ={userdetailurl} >userdetails</Link></div>
                        <div >coordinates:</div>
                        <div >latitude : {latitude}</div>
                        <div >longitude : {longitutude}</div>
                       
                        <div className="btn btn-warning mt-3" ><Link to ={postupdateurl} >update</Link></div>
                        
                        
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Post;