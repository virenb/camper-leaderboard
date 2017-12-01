import React from 'react';

const User = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td><a href={`https://freecodecamp.com/${props.username}`} target='_blank'>{props.username}</a></td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  )
}

export default User;