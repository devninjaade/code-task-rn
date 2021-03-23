import axios from 'axios'

export const posts = () => {
    return (dispatch) => {
        return axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}