import axios from 'axios'
class showlist{

    getProduct(){
        return axios.get("http://localhost:9999/movies/allshows")
    }

}
var allshows =new showlist()
export default allshows