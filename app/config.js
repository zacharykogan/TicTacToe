let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-api-production.herokuap.com',
  development: 'https://tic-tac-toe-api-development.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
// app/config.js
