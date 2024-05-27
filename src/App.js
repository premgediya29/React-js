import React from 'react';
import ThemeProvider from './redux/ThemeProvider';
import ThemeComponent from './redux/ThemeComponent';
import ToggleTheme from './redux/ToggleTheme';


function App() {
  return (
    <ThemeProvider>
      <ToggleTheme/>
      <ThemeComponent/>
    </ThemeProvider>
  );
}

export default App;
