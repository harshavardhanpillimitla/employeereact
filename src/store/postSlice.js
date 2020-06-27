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

export const login = (data) => actions.apicallbegan({
    
    method:'post',
    onSuccess :  tokenReceived.type,
    data:data

});
export  default slice.reducer;