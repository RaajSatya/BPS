
import React from 'react';
import { useColorScheme, } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialDarkTheme, MaterialLightTheme } from './theme/MyTheme';
import MainRouter from './routers/MainRouter';

function App() {

  let colorScheme = useColorScheme();

  return (
    <PaperProvider
      theme={colorScheme == 'light' ? MaterialLightTheme : MaterialDarkTheme}>
      <MainRouter />
    </PaperProvider>
  );
}

export default App;
