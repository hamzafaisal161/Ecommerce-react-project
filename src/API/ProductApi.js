import axios from 'axios'

function APICall (path, callback, setisLoaded, setisError) {
  const URL = process.env.REACT_APP_API_LINK + path
  axios
    .get(URL)
    .then((res) => {
      callback(res.data)
      setisLoaded(false)
    })
    .catch(error => {
      setisError(true)
      console.log(error)
    })
}

export default APICall
