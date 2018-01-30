import React from 'react'
import ReactDOM from 'react-dom'
//import Math

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }
  }

  satunnaista = () => () => {
  	console.log(this.state.selected)
  	this.setState({ selected: Math.floor(Math.random() * 6) })
  	console.log(this.state.selected)
  }

  aanesta = () => () => {
	console.log(this.state.pisteet)
	const kopio = this.state.pisteet
	kopio[this.state.selected] += 1
	console.log(kopio)
  	this.setState({ pisteet: kopio })
  	console.log(this.state.selected)
  }

  suosituin = () => () => {

  	const maxpisteet = Math.max(this.state.pisteet)
  	console.log(maxpisteet)
  	//this.props.anecdotes[]
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <p>
        	ääniä {this.state.pisteet[this.state.selected]}
        </p>

        <button onClick= {this.satunnaista()}>
        	new random wisdom!
        </button>

        <button onClick= {this.aanesta()}>
        	tää on parasta viisautta!
        </button>

        <p> eniten ääniä saanut viisaus on </p>

      	{this.props.anecdotes[this.state.pisteet.indexOf(Math.max(...this.state.pisteet))]}
      	<p> {Math.max(...this.state.pisteet)}  äänellä </p>

      </div>

   
      	
     
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)