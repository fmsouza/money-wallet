import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { AppRouter } from '~app';
import { LocalizationProvider, ThemeProvider } from '~shared/providers';

const App = () => (
  <LocalizationProvider>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </LocalizationProvider>
);

AppRegistry.registerComponent(appName, () => App);
