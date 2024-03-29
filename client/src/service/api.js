import axios from 'axios';

const  URL = '';

export const authenticateSignup = async (data) => {
 try {
  return await axios.post(`${URL}/signup`, data);
 } catch(err) {
    console.log('Error while calling API', err);
 }

}

export const authenticateLogin = async (data) => {
   try {
    return await axios.post(`${URL}/login`, data);
   } catch(error) {
      console.log('Error while calling login API', error);  
      return error.response;
   }
  }

export const payUsingPaytm = async(data) => {
      try {
         let response = await axios.post(`${URL}/payment`, data);
         return response.data;
   } catch (error) {
      console.log('error while calling payment api', error);
       return error.response;
   }

}