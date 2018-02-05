import React from 'react';
import Person from './components/Person'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addName = (event) => {
      event.preventDefault()

      const names = this.state.persons.map(a => a.name)
      console.log(names)

      if (names.includes(this.state.newName)) {
        this.setState({
          newName: '',
          newNumber: ''
        })
      } else {

      const person = {
        name: this.state.newName,
        number: this.state.newNumber
      }

      const persons = this.state.persons.concat(person)

      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
      }
    }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  limitShown = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>


        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>

            nimi: <input value={this.state.newName}
              onChange={this.handleNameChange}/>

            puhelinnumero: <input value={this.state.newNumber}
              onChange={this.handleNumberChange}/>
         
            <button type="submit">lisää</button>
          </div>
        </form>


        <h2>Numerot</h2>
        <table>
        <tbody>
          {this.state.persons.map((person, i) => 
            {
            
              if (person.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
                return <Person key={i} person={person} />
              }
             } 
            )

            
          }
        </tbody>
        </table>


        <h2>Hae</h2>       
            hae: <input value={this.state.filter}
              onChange={this.limitShown}/>
                
      </div>
    )
  }
}

export default App
