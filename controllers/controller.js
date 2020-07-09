const Employee = require('../models/employee');
const schema = require('./validate');
const jwt = require('jsonwebtoken');
//
exports.loginuser = function(request, response){
	let empName = request.body.empName;
	let empPass = request.body.empPass;
	Employee.find({empName:empName}, function(err, results) {

		if (err) response.end(err);
	  	if (empPass == results[0].empPass){
			jwt.sign({
			empName:results[0].empName,
			userID:results[0]._id
			},
		  	"mysecret",
		  	{expiresIn : "1h"},
		  	function(err, token){
				if(err) throw err;
				response.json({token:token});
		  	}
			)
	  	} else {
			response.send({status:"Login Failed"});
	  	}
	});
  };
  
  

exports.getdefault = function(request, response){ 
    response.end('You are on the root route.'); 
};
//
exports.getweights = function(request, response){
	Employee.find({}, function(err,results){
	  if (err)
              response.end(err);
      	  response.json(results);
	});
  };

exports.getallrecords=function(request, response){
	Weight.find({}, function(err, results){
		if (err)
		    response.end(err);
		response.json(results);
	});
	//res.send('You are on the getallrecords route.');
};

exports.addnewemployee = function(request, response) {
	const {error} = schema.validate(request.body);
	if(error)
    	return response.status(400).json(
			{error:error.details[0].message}
		);
	const Emp = new Employee();
	Emp.empName = request.body.empName;
	Emp.empPass = request.body.empPass;
	Emp.save({}, function(err){
		if (err)
		 response.send(err);
		response.send(`Created ${Emp.empName}`)
	})
};

exports.addnewweight = function(request, response) {
	let empName = request.body.empName;
  	let empWeight=parseInt(request.body.empWeight);
	Employee.updateOne(
	{empName: empName},
	{$addToSet:
		{employeeWeights :
		{
			empWeight:empWeight
		}
		}
	},
	{upsert : true},
	function(err, doc) {
		if(err) {
		return console.log(err);
		} else {
		return response.send("done");
		}
	}
	);
};

  
