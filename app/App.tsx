import React from 'react';
import GlobalProvider from './states/global';
import Routes from './routes';

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
