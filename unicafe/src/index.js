import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {



	constructor() {
		super()
		this.state = {
			counterGood: 0,
			counterNeutral: 0,
			counterBad: 0
		}
	}
	
	kasvataYhdella = (cntr) => () => {
		//console.log('cntr ' + cntr)
		//console.log('this.state.counter ' + this.state.counter)
		//console.log('ky' + this.state[cntr])
		this.setState({ [cntr]: this.state[cntr] + 1 })	
	}

	keskiarvo = () => {
		const summa = this.state.counterGood + this.state.counterBad + this.state.counterNeutral
		const ka = (this.state.counterGood + (this.state.counterBad * (-1))) / summa
		return ka
	}

	positiivisia = () => {
		const summa = this.state.counterGood + this.state.counterBad + this.state.counterNeutral

		const pos = (this.state.counterGood / summa) * 100
		return pos
	}

	

  	//asetaArvoon = (arvo) => () => this.setState({ counter: arvo })

	render() {
		console.log(this.state.counterGood, this.state.counterNeutral, this.state.counterBad)
		//console.log(this.state['counterGood'])

		const Statistics = ({kamat}) => (
			<table>
			<tbody>
				<Statistic stat={'hyvä'} nmbr={kamat.counterGood} />
				<Statistic stat={'neutraali'} nmbr={kamat.counterNeutral} />
				<Statistic stat={'huono'} nmbr={kamat.counterBad} />

				<Statistic stat={'keskiarvo'} nmbr={this.keskiarvo()} />
				<Statistic stat={'positiivisia'} nmbr={this.positiivisia() + '%'} />
			
			</tbody>
			</table>
		)

		const Statistic = ({stat, nmbr}) => (
			<tr>
				<td> {stat}   </td>
				<td> {nmbr}  </td>
			</tr>
		)

		const Display = ({ counter }) => <div>{counter}</div>
    	const Button = ({ handleClick, text }) => (
  			<button onClick={handleClick}>
    			{text}
  			</button>
		)

    	return (
    		<div>
    			<h1> Unicafe! Anna palautetta </h1>
      			<Display counter={this.state.counterGood}/>
      			<Display counter={this.state.counterNeutral}/>
      			<Display counter={this.state.counterBad}/>
      			
      			<Button
          			handleClick={this.kasvataYhdella('counterGood')}
          			text="hyvä"
        		/>

        		<Button
          			handleClick={this.kasvataYhdella('counterNeutral')}
          			text="neutraali"
        		/>

        		<Button
          			handleClick={this.kasvataYhdella('counterBad')}
          			text="huono"
        		/>

        		<h2> Statistiikkaa </h2>

        		<Statistics kamat={this.state}/>

      		</div>
    	)
  	}

}


 ReactDOM.render(
    <App />,
    document.getElementById('root')
 )
