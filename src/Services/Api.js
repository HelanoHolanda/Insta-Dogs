import axios from "axios";

 const apiDogs = axios.create({
       baseURL: "https://dogsapi.origamid.dev/json"    
 })
    
export default apiDogs;