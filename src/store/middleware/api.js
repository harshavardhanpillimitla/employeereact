import * as actions from '../actions';
import axios from 'axios';





const api = ({dispatch}) => next => async action =>{

    if(action.type === actions.apicallbegan.type)
    {
        next(action);
        const {url,method,data,onSuccess,onError,headers} = action.payload;
        try
        {
            const response = await axios.request(
                {
                    baseURL : 'https://backendemployeeapi.herokuapp.com',
                    url,
                    method,
                    headers,
                    data
                }
            );
            dispatch(actions.apicallsuccess(response.data));
            if(onSuccess) {

                
                dispatch({type:onSuccess, payload:response.data });
                
            
               

        }
            


        }
        catch(error)
        {    dispatch(actions.apicallfailed(error.response.status));
            if(error.response.status===400)
            {
                const out = {out : "incorrect credentials"}
                if(onError){dispatch({type:onError, payload:out })}
               
                
            }
            else{
                
               
                dispatch(actions.apicallfailed(error));
                if(onError){dispatch(actions.apicallfailed(error))}
            }
            
            
        
        }

    }
    else
    {
    return next(action);
    }
}
export default api ;