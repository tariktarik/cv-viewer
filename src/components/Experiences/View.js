import React from 'react';
import Experience from './Experience/View';

function Experiences() {
    return ( 
        <>
        <div className="row mt-5">
                    <h2>Experience</h2>
                  </div>

                  <Experience duration="2 Years"  position="Frontend developer" />
                  <Experience duration="6 Godine" position="UX/UI designer" />

                  
          </>
    )
}

export default Experiences;