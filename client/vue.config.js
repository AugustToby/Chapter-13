module.exports = {
  devServer: {
    // the address for my newly created api route
    //requests will be sent to the proxy link
    proxy: 'http://127.0.0.1:3000'
  }
}