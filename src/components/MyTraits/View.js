import React from 'react';
import Trait from './Trait/View';

function MyTraits(){
    return(
        <>
        <div className="row mt-5">
                    <h2>My Traits</h2>
                  </div>
                  <div className="row mt-2 mb-5">
                    <Trait trait="Fast"/>
                    <Trait trait="Team Player"/>
                    <button className="btn btn-light mr-2">{Trait}</button>
                    <button className="btn btn-light mr-2">Team Player</button>
                  </div>
                  </>
    )
}

export default MyTraits;