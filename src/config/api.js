import axios from 'axios'
export default axios.create({
  // development
  baseURL: 'http://localhost:3000'
  // production
  // baseURL: 'https://y-kickoff.herokuapp.com'
})
