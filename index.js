const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is up and running!! Listening on port ${PORT}...hang ten!! 🤙`)
})