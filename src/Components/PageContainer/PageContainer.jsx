import React from 'react';
import './Styles.css'

function PageContainer(props) {

  // Define the class name conditionally
  const className = props.containerFor === 'table' ? 'table-container' : 'page-container';

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

export default PageContainer;
