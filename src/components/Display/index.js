import React from 'react';
import styles from './Display.module.css'
import PropTypes from 'prop-types';



const  Display  =  props =>{

  return (<div className={styles.display} children={props.children}/>)

};


Display.defaultProps = {
  children:''
};

Display.propTypes = {
  children:PropTypes.string.isRequired
};




export default Display;