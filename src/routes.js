import { OverviewScreen } from '~modules/overview/screens';
import { ProfileScreen } from '~modules/profile/screens';
import { SettingsScreen } from '~modules/settings/screens';
import { StatementsScreen } from '~modules/history/screens';

export const initialScreen = OverviewScreen;

export const screens = [
  OverviewScreen,
  ProfileScreen,
  SettingsScreen,
  StatementsScreen,
];
