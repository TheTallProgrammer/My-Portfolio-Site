import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Loading from './Loading';
import '../styles/Resume.css';

function Resume({ onLoad }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 300);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div className="resume-wrapper">
      {isLoading && (
        <div className="loading-overlay">
          <Loading />
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/a8XWcvvru432-wPB/scene.splinecode"
        onLoad={handleLoad}
        className={isMobile ? 'spline-mobile' : 'spline-desktop'}
        style={{
          display: isLoading ? 'none' : 'block',
          width: '100%',
          height: '100%',
        }}
      />
      {/* Transparent overlay to allow scrolling */}
      {isMobile && <div className="spline-overlay"></div>}
    </div>
  );
}

Resume.propTypes = {
  onLoad: PropTypes.func,
};

export default React.memo(Resume);
