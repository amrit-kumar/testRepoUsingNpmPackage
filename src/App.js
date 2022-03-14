import React, { Component } from 'react'
import Table from './Table'
import { Button } from 'amritutils'
import { Badge } from 'amritutils'
class App extends Component {

  removeCharacter = (index) => {
    const { characters } = this.state


    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  state = {
    show: true,
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }
  handleClick = () => {
    this.setState((state) => (  // this is the current state
      {
        show: !state.show, // this will be the previous randomNumber

      }));

  }

  render() {


    const { characters } = this.state
    const { show } = this.state


    return (
      <div className="container">
        <Button label="Show Grid" kind="primary" handleClick={this.handleClick} />
        {show && <Table characterData={characters} removeCharacter={this.removeCharacter} />}
      </div>
    )
  }
}

export default App