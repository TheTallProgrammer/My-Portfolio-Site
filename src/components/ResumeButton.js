import React from 'react';
import '../styles/ResumeButton.css';

const ResumeButton = (props) => {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/assets/resume.pdf';
        link.download = 'Logan Falkenberg Resume.pdf';
        link.click();
      };


  return (
    <div className='resume-button-container'>
    {/* From Uiverse.io by MuhammadHasann */}
      <button onClick={downloadResume}>
        {props.buttonText}
        <div className="star-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }}
            viewBox="0 0 784.11 815.53"
          >
            <g id="Layer_x0020_1">
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ResumeButton;
