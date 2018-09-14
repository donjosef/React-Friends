import React, { Component } from 'react';
import {people} from './people';
import PeopleList from './components/PeopleList/PeopleList';
import './App.css';

class App extends Component {
  state = {
    people: [],
    selectedPerson: null
  }

  componentDidMount() {
     this.setState({ people });
  }

  showFriendsHandler = (person) => {
    if(this.state.selectedPerson === person) {
      this.setState({ selectedPerson: null })
    } else {
      this.setState({ selectedPerson: person });
    }
  }

  render() {
    return (
      <div className="App">
        <PeopleList
            people={this.state.people}
            showFriends={this.showFriendsHandler}
            selectedPerson={this.state.selectedPerson} />
      </div>
    );
  }
}

export default App;
