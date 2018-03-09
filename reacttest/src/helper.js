var axios = require('axios');

function getUser(userID){
  return axios.get('http://localhost:4000/users/' + userID);
}


var helpers = {
  getGithubInfo: function(userID){
    return axios.all([getUser(userID)])
      .then(function(arr){
        return {
          user: arr[0].data
        }
      })
  }
}

module.exports = helpers;