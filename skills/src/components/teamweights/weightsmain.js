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
    }
  //
  render(){
    if(this.state.allWeights.length > 0){
      return(
        <main>
          {this.state.allWeights.map((emp, i) =>
            (
              <div key={i}>
                { this.state.allWeights.map((emp,j) =>
                    (
                      <div key={j}>
                        {emp.empName}{
                          emp.employeeWeights.map((weight,k)=>{
                            return <div  key={k}>
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
              </div>
            )
          )}
        </main>
      )
    } else {
      return(
        <div>Not authorized</div>
      )
    }
  }

}
//
export default WeightsMain;
