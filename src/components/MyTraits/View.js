import React from 'react';
import Trait from './Trait/View';

function MyTraits({traits}){
    return(
        <>
        <div className="row mt-5">
                    <h2>My Traits</h2>
                  </div>
                  <div className="row mt-2 mb-5">
                  {traits.map((trait) => (
                    <Trait trait={trait} key={trait}/>
                  ))}
                  </div>
                  </>
    )
}

export default MyTraits;