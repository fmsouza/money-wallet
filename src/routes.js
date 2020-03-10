import { HelpScreen } from '~modules/support/screens';
import { OverviewScreen } from '~modules/overview/screens';
import { ProfileScreen } from '~modules/profile/screens';
import { SettingsScreen } from '~modules/settings/screens';
import { StatementsScreen } from '~modules/history/screens';

export const initialScreen = OverviewScreen;

export const screens = [
  HelpScreen,
  OverviewScreen,
  ProfileScreen,
  SettingsScreen,
  StatementsScreen,
];
