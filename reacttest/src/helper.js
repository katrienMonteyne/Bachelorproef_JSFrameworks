var axios = require('axios');

var helpers = {
  getUserInfo: function(userID){
    return axios.get('http://localhost:4000/users/' + userID);
  }
}

module.exports = helpers;