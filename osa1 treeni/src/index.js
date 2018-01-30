

import React from 'react';
import ReactDOM from 'react-dom';
/*
const App = () => {
	console.log('Hello from komponentti')
	const now = new Date()
	const a = 10
	const b = 20
	const name1 = 'Anna'
	const name2 = 'Mari'
	return (
		<div>
			<p>Hello World, it is {now.toString()}</p>
			<p>{a} plus {b} is {a + b}</p>
			<p>My name is {name1 + name2}</p>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
*/

const Footer = () => {
  return (
    <div>greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {
	const a = 10
	const b = 20
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Arto'/>
      <Hello name = 'Matti 'age={a + b}/>
      <Hello />
      <h2><Hello /></h2>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))