import axios from 'axios'
class theaterlist{

    getProduct(){
        return axios.get("http://localhost:9999/theaters")
    }

}
var alltheaters =new theaterlist()
export default alltheaters