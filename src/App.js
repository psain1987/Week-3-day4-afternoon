import React, { Component } from 'react';
import './reset.css';
import './App.css';
import EmployeeCard from './employeeCard';
import Navigation from './navigation';
import data from './data';


class App extends Component{
  constructor(){
    super()
    this.state ={
      data: data,
      userNumber: 0
    }
  }

  increasesNum = () => {
    if (this.state.userNumber === 24){
      this.setState({
        userNumber: 0
      })
    } else {
      this.setState({
        userNumber: this.state.userNumber + 1
      })
    }
  }
  

  decreasesNum = () => {
    if (this.state.userNumber === 0){
      this.setState({
        userNumber: 24
      })
    }else {
      this.setState({
        userNumber: this.state.userNumber - 1
      })
    }
  }



  render(){
    const {data, userNumber} = this.state 

    return (
      <div className="App">
      <header>
         <h1 > Home </h1>
      </header>
      <body>
        <div className='content'>
            <EmployeeCard user={data[userNumber]}/>
            <Navigation increase={this.increasesNum} decrease={this.decreasesNum}/>
        </div>
      </body>
      
    </div>
    )
  }
}

export default App;


// constructor(props) {
//   super(props);

//   this.state = {
//     questionsAnswered: 0
//   };

//   this.handleClick = this.handleClick.bind(this);
// }
// handleClick() {
//   this.setState({ questionsAnswered: this.state.questionsAnswered + 1 });
// }
// render() {
//   <div className="lead-mentor-container">
//     <h1>Michael Scott</h1>
//     <h3>{this.state.questionsAnswered}</h3>
//     <h3>questions answered today</h3>
//     <button onClick={this.handleClick}>Increase Answers</button>
//   </div>;
// }