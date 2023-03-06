import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({task, handleDeleteTask2}) => (
  <li className={styles.Task}>
    {task}
    <div>
      <button onClick={()=>handleDeleteTask2(task)}>🗑️</button>
      <button>✔️</button>
    </div>
  </li>
);

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
