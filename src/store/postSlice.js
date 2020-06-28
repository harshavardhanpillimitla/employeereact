import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState ={
    list:[],
    user:[],
    isAuthenticated:false,
    justUpdated:false
    
};
const slice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        postReceived : (posts,action) =>{
            posts.list  = action.payload;
            posts.justUpdated=false;

            
        },
        tokenReceived : (posts,action) => {
            posts.user = action.payload;
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('username',action.payload.user["username"]);
            
            posts.isAuthenticated = true;
        },
        changePosts : (posts,action) =>{
            posts.justUpdated=true;
        },
        logedout : (posts,action) =>{
           
            localStorage.clear();
            return initialState;
        }




       
        }
    

});
export const {postReceived,tokenReceived,changePosts,logedout} = slice.actions;

export const login = (data) => actions.apicallbegan({
 
    method:'POST',
    onSuccess :  tokenReceived.type,
    onRedirect: '/home',
    data:data,
    url : '/auth/login/'

});
export const posts = (data) => actions.apicallbegan({
 
    method:'GET',
    url:'/post/',
    onSuccess :  postReceived.type,
   
   
    
    headers:data

});
export const postsUpdate = (headers,id,data) => actions.apicallbegan({
 
    method:'PATCH',
    url:`/post/${id}/`,
    onSuccess :  logout.type ,
   
   
    
    headers,
    data,
    id


});
export const AddingPost = (headers,data) => actions.apicallbegan({
 
    method:'POST',
    url:'/post/',
    onSuccess : changePosts.type ,
   
   
    
    headers,
    data


});

export const logout = (headers) => actions.apicallbegan({
 
    method:'POST',
    url:'/auth/logout/',
    onSuccess : logedout.type ,
    
   
   
    
    headers,
    data:{}


});
export  default slice.reducer;