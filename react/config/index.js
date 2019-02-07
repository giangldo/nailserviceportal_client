if(process.env.NODE_ENV === 'production') {
    
    module.exports = {
        HOST: "",
        API_BASE_URL: "",
        WEBSOCKET_URL: ""
    };

} else {

    module.exports = {
        HOST: "http://localhost:3000",
        API_BASE_URL: "http://localhost:5000",
        WEBSOCKET_URL: "ws://localhost:5000/cable"
    };
    
}