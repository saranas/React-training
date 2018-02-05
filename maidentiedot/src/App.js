import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      foundCountries: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }


  limitShown = (event) => {
    this.setState({ filter: event.target.value })

    console.log(this.state.countries)

    const maat = this.state.countries.map((country, i) => 
            {           
              if (country.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
                 
                return country
              }
            })
    const maatSiiv = []
     maat.forEach((maa) => {
      if (maa !== undefined) {
        maatSiiv.push(maa)
      }
     }) 
     console.log(maatSiiv) 
     this.setState({ foundCountries: maatSiiv})

    }


  render() {
    return (
      <div>

        <h1>Maahaku</h1>

        <h2>Hae</h2>       
            hae maata: <input value={this.state.filter}
              onChange={this.limitShown}/>

          {
             this.state.foundCountries.length > 10 ? 
             'liikaa maita' : this.state.foundCountries.map((co, i) => {return <p> {co.name} </p>})
    

          }
          {console.log()}
 
                
      </div>
    )
  }
}

export default App
