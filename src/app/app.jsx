import React from 'react';

import Main from '../main/main.jsx';


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {moveDetails} = props;
  return (
    <Main
      moveDetails={moveDetails}
    />
  );
};


export default App;
