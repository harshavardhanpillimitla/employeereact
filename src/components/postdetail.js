import React,{Component} from 'react';
import axios from 'axios';

import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

class PostDetail extends Component{
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
      
       axios.get(`http://localhost:8000/post/${id}/`,config)
       .then(res => {
            
            console.log("stare",res.data)
            this.setState(res.data);

       })
  }catch(ex)
  {
    alert("error")

  }

  }

    render(){

      const {name,latitude,longitutude} = this.state;
      const l = parseFloat(latitude);
      const ln =parseFloat(longitutude);
      const pos = {
        lat: l ,
        lng: ln
      }
      console.log(pos)
      console.log(typeof latitude, typeof l,ln)
        return(
          <div  className="container" >
            <Map
              google={this.props.google}
              zoom={19}
              style={mapStyles}
              initialCenter={{
                lat: l,
                lng: ln
              }}
             
            >
             <Marker
              onClick={this.onMarkerClick}
              name={'This is test name'}
            />
            </Map>
          </div>
            

        )
    }
}
export default  GoogleApiWrapper({
    apiKey: 'AIzaSyB0IMfWuAaNoG5IxGNSfggIfJig3JmnM1Q'
  })(PostDetail);