import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import List from './List';

const api = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
const allTime = 'alltime';
const recent = 'recent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTimeLeaders: [],
      recentLeaders: [],
      currentView: 'allTimeLeaders',
      title: 'All Time'
    };
    this.handleChange = this.handleChange.bind(this);  
  }

  componentDidMount() {
    axios.all([
      axios.get(api + allTime),
      axios.get(api + recent)
    ])
    .then(axios.spread((allTime, recent) => {
      let allTimeFetched = allTime.data.map(obj => Object.values(obj));
      let recentFetched = recent.data.map(obj => Object.values(obj));
      this.setState({ allTimeLeaders: allTimeFetched, recentLeaders: recentFetched })
    }))
    .catch(error => console.log(error));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ currentView: event.target.value, title: event.target.name });
  }

  render() {
    return (
      <div className='container'>
      <div className='text-center'>
      <h1><span id='fcc-title'>FreeCodeCamp</span> {this.state.title} Camper Leaderboard</h1> 
      <button value='allTimeLeaders' name='All Time' onClick={this.handleChange} className='btn btn-default'>All Time</button>
      <button value='recentLeaders' name='Recent' onClick={this.handleChange} className='btn btn-success'>Recent</button>        
      </div>
        <List users={this.state[this.state.currentView]}/>      
      </div>      
    )
  }
}

export default App;
