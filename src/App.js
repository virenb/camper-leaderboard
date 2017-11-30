import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const api = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
const allTime = 'alltime';
const recent = 'recent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTimeLeaders: [],
      recentLeaders: [],
      currentView: 'allTimeLeaders'
    };
  }

  componentDidMount() {
    axios.all([
      axios.get(api + allTime),
      axios.get(api + recent)
    ])
    .then(axios.spread( (allTime, recent) => {
      let allTimeFetched = allTime.data.map(obj => Object.values(obj));
      let recentFetched = recent.data.map(obj => Object.values(obj));
      this.setState({ allTimeLeaders: allTimeFetched, recentLeaders: recentFetched })
      console.log(allTimeFetched);
      console.log(recentFetched);
    }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'><span id='fcc-title'>FreeCodeCamp</span> Camper Leaderboard</h1> 
        <ul>{this.state.allTimeLeaders.map(function(user, i) {
         return <li key={i}>{i+1} {user[0]} <span>{user[2]}</span> <span>{user[3]}</span></li>
        })}
        </ul>
        <ul>{this.state.recentLeaders.map(function(user, i) {
          return <li key={i}>{i+1} {user[0]} <span>{user[2]}</span> <span>{user[3]}</span></li>
         })}
         </ul>        
      </div>
    )
  }
}

export default App;
