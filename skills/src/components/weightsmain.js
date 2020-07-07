import React, {Component} from 'react';
//
class WeightsMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      allWeights: []
    }
  }
  //
  componentDidMount(){
      fetch("http://34.242.105.10:3001/getweights")
      .then(response => response.json())
      .then(response => {
        this.setState({
          allWeights:response
        })
      })
      console.log("Got to the end of componentDidMount");
    }
  //
  render(){
    return(
            <main>
              { this.state.allWeights.map(emp =>
                  (
                    <div>
                      {emp.empName}{
                        emp.employeeWeights.map(function(weight){
                          return <div>
                              Date: {new  Date(weight.weighedDate).toLocaleDateString()}
                              {' '}
                              Weight: {weight.empWeight}
                            </div>
                        })
                      }
                    </div>
                  )
                )
              }
            </main>
    )
  }
}
//
export default WeightsMain;
