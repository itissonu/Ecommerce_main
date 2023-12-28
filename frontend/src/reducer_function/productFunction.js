import axios from "axios";

import { URL } from '../utils/serverurl'

const getallproducts = async () => {
    try {
      const response = await axios.get(`${URL}product/allproducts`, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }
  const getaproduct = async (id) => {
    try {
      const response = await axios.get(`${URL}product/products/${id}`, {
        withCredentials: true,
      });
      if(response.data){
     
        return response.data;
      }
    } catch (error) {
      throw error.response.data
  
    }
  }
  
const productFunctions = {
    getallproducts,getaproduct
  }
  export default productFunctions;