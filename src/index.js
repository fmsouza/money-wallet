import React from 'react';
import { StatusBar, View } from 'react-native';
import merge from 'lodash/merge';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '~shared/providers';
import { HelpScreen } from '~modules/support/screens';
import { OverviewScreen } from '~modules/overview/screens';
import { ProfileScreen } from '~modules/profile/screens';
import { LocalizationScreen, SettingsScreen } from '~modules/settings/screens';
import { StatementsScreen } from '~modules/history/screens';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const initialScreen = OverviewScreen;

export const screens = [
  HelpScreen,
  LocalizationScreen,
  OverviewScreen,
  ProfileScreen,
  SettingsScreen,
  StatementsScreen,
];

export const AppRouter = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar {...theme.statusBar} />
        <Stack.Navigator initialRouteName={initialScreen.route}>
          {screens.map(screen => (
            <Stack.Screen
              key={screen.route}
              name={screen.route}
              component={screen}
              options={merge({ ...theme.navbar }, { ...screen.options })}
            />
          ))}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
