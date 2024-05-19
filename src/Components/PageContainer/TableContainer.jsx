import React from 'react';
import './ContainerStyles.css';
function TableContainer(props) {
  return (
    <div className='table-container'>
        {props.children}
    </div>
  );
}

export default TableContainer;
