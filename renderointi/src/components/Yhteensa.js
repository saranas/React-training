import React from 'react'


const Yhteensa = ({osat}) => {

return (
	
    <div>
      <p> yhteensä  

      	{osat.reduce((a, b) => {

      		return a+b.tehtavia
      	
      	}, 0)}

      	 tehtävää </p>
		
    </div>
  )
}

export default Yhteensa