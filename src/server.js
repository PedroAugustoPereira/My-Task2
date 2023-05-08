const app = require("./app");
const routes = require("./routes")
require("dotenv").config();

const config = require("./config/config"); 
config = config['development'];

const PORT = config.port;

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("Server Running")
})


