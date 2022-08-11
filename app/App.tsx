import React from 'react';
import ThemeProvider from './states/theme';
import GlobalProvider from './states/global';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
