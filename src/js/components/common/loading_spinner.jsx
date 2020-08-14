import React from 'react';

const LoadingSpinner = (props) => (
  <div class='loading-spinner-container'>
    <div class='spinner-grow text-success loading-spinner' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
    <div class='spinner-grow text-success loading-spinner' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
    <div class='spinner-grow text-success loading-spinner' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
