import axios from 'axios'
import { POSTS } from "../reducer/apiReducer";

export const posts = () => {
    return (dispatch) => {
        return axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({type: POSTS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}
