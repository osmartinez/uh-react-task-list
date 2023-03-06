import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './InputButton.module.css';

const InputButton = ({handleAddTask}) => {

  const [title,setTitle] = useState("")

  function onAdd(){
    // informa del titulo
    handleAddTask(title)
    // limpia el titulo
    setTitle("")
  }

  return (
  <div className={styles.InputButton}>
    <input onChange={(e)=>setTitle(e.target.value)} value={title} />
    <button onClick={onAdd}>add</button>
  </div>)
};

InputButton.propTypes = {};

InputButton.defaultProps = {};

export default InputButton;
