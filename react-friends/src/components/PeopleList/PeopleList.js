import React from 'react';
import Person from '../Person/Person'

const peopleList = props => {
    const people =  props.people.map(person => {
        return (
            <Person
                key={person.id}
                firstName={person.first_name}
                lastName={person.last_name}
                email={person.email}
                showFriends={() => props.showFriends(person)}
                selectedPerson={props.selectedPerson}/>
        );
      });

    return (
        <ul className='List'>
          {people}
        </ul>
    )
}

export default peopleList;
