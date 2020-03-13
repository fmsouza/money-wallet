import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Container, Icon } from '~shared/widgets';

import { useLocale } from '~modules/overview/intl';
import { StatementsScreen } from '~modules/history/screens';
import { Balance } from '~modules/history/widgets';
import { InsightsSlider, OperationItem } from '~modules/overview/widgets';
import { HelpScreen } from '~modules/support/screens';
import { ProfileScreen } from '~modules/profile/screens';
import { SettingsScreen } from '~modules/settings/screens';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  rightHeaderContainer: {
    marginRight: 10,
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  balanceWrapper: {
    width: '100%',
    paddingHorizontal: theme.padding,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 100,
    width: '100%',
    flex: 1,
  },
  footer: {
    height: 100,
    paddingHorizontal: theme.padding / 2,
  },
}));

export const OverviewScreen = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { getText } = useLocale();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('overview.greeting', { name: 'Fred' }),
      headerRight: () => (
        <View style={styles.rightHeaderContainer}>
          <Icon.Button
            name="account-circle"
            color={theme.colors.text}
            onPress={() => navigation.navigate(ProfileScreen.route)}
          />
        </View>
      ),
    });
  }, [theme.colors.text, getText, navigation, styles.rightHeaderContainer]);

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.content}>
          <View style={styles.balanceWrapper}>
            <Balance value={200.55} />
          </View>
          <InsightsSlider />
        </View>
      </Container>
      <View style={styles.footer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OperationItem
            title={getText('overview.operations.statements')}
            icon="format-list-bulleted"
            onPress={() => navigation.navigate(StatementsScreen.route)}
          />
          <OperationItem
            title={getText('overview.operations.insights')}
            icon="finance"
            onPress={onHandleNotImplemented}
          />
          <OperationItem
            title={getText('overview.operations.deposit')}
            icon="bank-transfer-in"
            onPress={onHandleNotImplemented}
          />
          <OperationItem
            title={getText('overview.operations.transfer')}
            icon="bank-transfer-out"
            onPress={onHandleNotImplemented}
          />
          <OperationItem
            title={getText('overview.operations.help')}
            icon="comment-text-outline"
            onPress={() => navigation.navigate(HelpScreen.route)}
          />
          <OperationItem
            title={getText('overview.operations.settings')}
            icon="settings"
            onPress={() => navigation.navigate(SettingsScreen.route)}
          />
        </ScrollView>
      </View>
    </View>
  );
};

OverviewScreen.route = 'Overview';
