import React from 'react';
import './ContainerStyles.css'
function PageContainer(props) {
  return (
    <div className='page-container'>
        {props.children}
    </div>
  );
}

export default PageContainer;
