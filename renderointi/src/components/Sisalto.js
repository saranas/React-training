import React from 'react'
import Osa from './Osa'
import Yhteensa from './Yhteensa'

const Sisalto = ({osat}) => {

return (
    <div>

    	{osat.map((osa, i) => <Osa osa={osa} key={i}/>)}

      <Yhteensa osat={osat}/>
        
    </div>
  )
}

export default Sisalto