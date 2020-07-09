import React, {Component} from "react";
const jwt = require('jsonwebtoken');
//
class EnterWeightMain extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      empName:"",
      empWeight:"",
      loginStatus:"",
      feedback:""
    }
  }
  //
  componentDidMount() {
    const self = this;
    const rawToken = localStorage.getItem('token');
    jwt.verify(rawToken, 'mysecret', function(err, decoded) {
      if (err) {
        self.setState({feedback: 'Failed to authenticate token.'});
      } else {
        const decToken = jwt.verify(rawToken, 'mysecret');
      }
    });

  }
  //
  handleFieldChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit(event) {
    const self = this;
    event.preventDefault();
    fetch('http://34.242.105.10:3001/addnewweight', {
      method: 'PUT',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({ 
        empName: this.state.empName,
        empWeight: this.state.empWeight
       })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      self.setState({feedback: data.message});
    }).catch(function(err) {
      console.log(err);
    })
  }
  render() {
    return (
      <main>
        <h2>Enter Weight</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>
              {this.state.empName}, what is your
            </span>
          </div>
          <div>
            <label>
              weight today:
                <input type="text" name="empWeight" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <span>{this.state.loginStatus}</span>
          </div>
          <div>
            <span> {this.state.feedback} </span>
          </div>
        </form>
      </main>
    )
  }
  
};
export default EnterWeightMain
