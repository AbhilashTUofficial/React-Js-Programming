import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(){
    super();
    console.log("App Contructor")
  }

  componentDidMount(){
    console.log("App Mounted")
  }
  componentDidUpdate(){
    console.log("App Updated")
  }

  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App Rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncreament={this.handleIncreament}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
