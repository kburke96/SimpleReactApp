const express = require('express');
const routes = require('../routes/routes');
const port = 3001;
//
const app = express();
routes(app);
const router = express.Router();
app.use('/', router);
//
app.post('/addnewdoc', function(request, response){
    let empName = request.body.empName;
    let empWeight = request.body.empWeight;
    console.log(`POST success, you sent ${empName} and ${empWeight}, thanks!`);
    response.end(`POST success, you sent ${empName} and ${empWeight}, thanks!`);
});
//
app.listen(port, function(){
	console.log("Listening " + port);
});
