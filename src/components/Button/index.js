import React  from 'react';
import PropTypes from 'prop-types';

const Button =(props) => {






    return (
        <div{...props}/>
    );


};

Button.propTypes = {
  value:PropTypes.string,
  onClick: PropTypes.func,
  className:PropTypes.string,
  children:PropTypes.string,
};



export default  Button;



