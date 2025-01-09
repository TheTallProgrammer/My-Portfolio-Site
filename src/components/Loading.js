import React from 'react';
import '../styles/Loading.css'; 

function Loading() {
  return (
    <div className='loading-container'>
       {/* Variation of original component from Uiverse.io by mobinkakei */}
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>

    </div>
    
  );
}

export default Loading;
