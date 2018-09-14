import React from 'react';
import Friends from '../Friends/Friends'
import Aux from '../../hoc/Auxiliary/Auxiliary'

const person = props => {
    let personItem = (
      <li onClick={props.showFriends} className='ListItem'>
        <p>Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
      </li>
    );

    if(props.selectedPerson) {
      if(props.selectedPerson.email === props.email) {
        personItem = (
          <Aux>
            <li onClick={props.showFriends} className='ListItem'>
              <p>Name: {props.firstName}</p>
              <p>Last Name: {props.lastName}</p>
              <p>Email: {props.email}</p>
            </li>
            <Friends friends={props.selectedPerson.friends}/>
          </Aux>
        );
      }
    }
    return personItem
}

export default person;
