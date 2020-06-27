import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';


const slice = createSlice({
    name:"posts",
    intialstate :{
        list
        :[],
        token:""
    },
    reducers: {
        postReceived : (post,action) =>{
            post.list  = action.payload;
            
        },
        tokenReceived : (post,action) => {
            post.token = action.payload;
        }


       
        }
    

});
export const {postRecieved,tokenReceived} = slice.actions;
const url = '/login'
export const login = () => actions.apicallbegan({
    url :url,
    method:'POST',
    onSuccess :  tokenReceived.type,
    data:{
        email:"admin@admin.com",
        password:"Qwerty@123"
      }

});
export  default slice.reducer;