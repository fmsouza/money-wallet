import React from 'react';
import merge from 'lodash/merge';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import { initialScreen, screens } from '~app/routes';
import theme, { headerTheme, statusBarTheme } from '~app/theme';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar {...statusBarTheme} />
      <Stack.Navigator initialRouteName={initialScreen.route}>
        {screens.map(screen => (
          <Stack.Screen
            key={screen.route}
            name={screen.route}
            component={screen}
            options={merge({ ...headerTheme }, { ...screen.options })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
