import React from 'react';
import Nav from '../Nav/View';

function Header({nav}){
    return (
        <div className="row ac-header">
          <div className="col-md-10 offset-md-1 p-0">
            <Nav nav={nav}/>
          </div>
        </div>
    )
}

export default Header;