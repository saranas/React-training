import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

const Kurssi = ({nimi, osat}) => {
	
	return (
		<div>
			<Otsikko nimi={nimi}/>
			<Sisalto osat={osat}/>
		</div>
	)
}

export default Kurssi