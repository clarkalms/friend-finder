let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 8000;

app.use(express.static('app/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });