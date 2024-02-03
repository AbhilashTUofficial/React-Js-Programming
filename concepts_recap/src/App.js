import React, { Component } from 'react'
import Counter from './components/Counter';
import "./scss/index.scss"
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

 componentDidMount(){
  // Executed after the component is rendered to the DOM.
  console.log("Component Did Mount.")
 }

 componentDidUpdate(prevProps, prevState){
  // Executed after the component's state or props updated.
  console.log("Component State Changed.")
 }

 componentWillUnmount(){
  // Executed just before the component is removed form the DOM tree.
 }


  render() {
    return (
      <div className='app-container'>
        <Counter count={this.state.count} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
      </div>
    )
  }
}
