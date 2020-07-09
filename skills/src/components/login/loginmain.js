import React, {Component} from "react";
//
class LoginMain extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      empName:"",
      empWeight:"",
      empPass:"",
      loginStatus:"",
      token:""
    }
  }
  handleFieldChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit(event) {
    const self = this;
    event.preventDefault();
    fetch('http://34.242.105.10:3001/loginuser', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({ 
        empName: this.state.empName,
        empPass: this.state.empPass
       })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      if (typeof data.token === 'undefined') {
        self.setState({loginStatus: "not logged in"});
      } else if (typeof data.token === 'string') {
        //console.log("DEBUG:: Data object: " + data);
        console.log("DEBUG:: The token value is " + data.token);
        console.log("DEBUG:: Type: " + typeof(data.token));
        self.setState({token: data.token});
        self.setState({loginStatus: 'Logged in'});
        localStorage.setItem('token', self.state.token)
      }
    }).catch(function(err) {
      console.log(err);
    })
  }
  render() {
    return (
      <main>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
                <input type="text" name="empName" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
                <input type="text" name="empPass" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <span>{this.state.empName} is {this.state.loginStatus}</span>
          </div>
        </form>
      </main>
    )
  }
  
};
export default LoginMain
