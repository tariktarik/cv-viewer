import React from 'react';

function Button({className, text}){
    return (
        <button className={className}>
      {text}
    </button>

    )
}

Button.defaultProps = {
    text: 'Button',
    className: 'btn btn-dark mr-2 ac-w-18',

} 
export default Button;