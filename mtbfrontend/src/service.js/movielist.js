
import axios from 'axios'
class movielist{

    getProduct(){
        return axios.get("http://localhost:9999/movie/getMovies")
    }

}
var allmovies =new movielist()
export default allmovies