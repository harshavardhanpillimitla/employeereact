import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component
{

    render(){

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                    <a class="navbar-brand disabled" href="#">Blog post</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/AddPost">AddPost</Link>
                        </li>
                      
                        </ul>
                    </div>
                        
            </nav>


            
        )
    }
}

export default NavBar;