import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Results from './components/results';

class App extends Component {
  //set up initial state
  constructor(props){
    super(props);
    this.state = {
      defaultSearch: "input here",
      results: []
    };
    this.callNYTimes = this.callNYTimes.bind(this);
  }
  //call NYT API to get results
  callNYTimes(queries) {
    console.log('im in app', queries);
/*    return axios.get('nytimes.api/' + queries)
      .then((res) => {
        this.state.results = res[];
      })*/
  }
  
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        
        <Search callback={this.callNYTimes} defaultSearch={this.state.defaultSearch}/>
        <Results apiResults={this.state.results}/>

      </div>
    );
  }
}

export default App;
