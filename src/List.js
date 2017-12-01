import React from 'react';
import User from './User';

const List = (props) => {
  const users = props.users;
  const usersList = users.map((user, i) => {
    return <User key={i} number={i+1} username={user[0]} recent={user[3]} alltime={user[2]}/>
  })
    return (
      <table className='table table-striped'>      
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>30 Days</th>
            <th>All Time</th>
          </tr>
        </thead>
        <tbody>
          {usersList}
        </tbody>
      </table>   
    )
  }

export default List;