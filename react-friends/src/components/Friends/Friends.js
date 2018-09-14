import React from 'react';

const friends = props => {
    return (
      <ul className='FriendsList'>
        {props.friends.map(friend => (
          <li className='Friend' key={friend.firstName}>{friend.firstName + ' ' + friend.lastName}</li>
        ))}
      </ul>
    )
}
export default friends;
