import React from 'react';

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {

    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary text-white" onClick={onClick} type={type} buttonStyle={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;