

import API from "../../Api/API";
const api = new API();
const endPoints = "/delivery.json";
 
export const getProductsDataApi = async () => {
  return new Promise(async (resolve, reject) =>{
    try {
      const result = await api.get(endPoints);
    if(result&&result.data){
          resolve(result);
          return(result);
      }
      
    }catch (error) {
      console.error("API error", error);
      reject(error);
    }
  })
}
 