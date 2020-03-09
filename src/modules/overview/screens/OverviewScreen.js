import React, { useLayoutEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { useLocalization } from '~shared/intl';
import { makeStyles } from '~shared/styles';
import { Container, Icon } from '~shared/widgets';
import { ProfileScreen } from '~modules/profile/screens';
import { SettingsScreen } from '~modules/settings/screens';

import {
  Balance,
  InsightsSlider,
  OperationItem,
} from '~modules/overview/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 100,
    width: '100%',
    flex: 1,
  },
  operationContentContainer: {
    borderTopWidth: 1,
  },
  footer: {
    height: 100,
  },
}));

export const OverviewScreen = () => {
  const styles = useStyles();
  const { colors } = useTheme();
  const loc = useLocalization();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loc.t('overview.greeting', { name: 'Fred' }),
      headerRight: () => (
        <View style={styles.rightHeaderContainer}>
          <Icon.Button
            name="account-circle"
            color={colors.text}
            onPress={() => navigation.navigate(ProfileScreen.route)}
          />
        </View>
      ),
    });
  }, [colors.text, loc, navigation, styles.rightHeaderContainer]);

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <Balance value={200.55} />
        <InsightsSlider />
      </View>
      <View style={styles.footer}>
        <ScrollView
          contentContainerStyle={styles.operationContentContainer}
          horizontal={true}>
          <OperationItem
            title={loc.t('overview.operations.statement')}
            icon="format-list-bulleted"
            onPress={() => {}}
          />
          <OperationItem
            title={loc.t('overview.operations.insights')}
            icon="finance"
            onPress={() => {}}
          />
          <OperationItem
            title={loc.t('overview.operations.deposit')}
            icon="bank-transfer-in"
            onPress={() => {}}
          />
          <OperationItem
            title={loc.t('overview.operations.transfer')}
            icon="bank-transfer-out"
            onPress={() => {}}
          />
          <OperationItem
            title={loc.t('overview.operations.help')}
            icon="comment-text-outline"
            onPress={() => {}}
          />
          <OperationItem
            title={loc.t('overview.operations.settings')}
            icon="settings"
            onPress={() => navigation.navigate(SettingsScreen.route)}
          />
        </ScrollView>
      </View>
    </Container>
  );
};

OverviewScreen.route = 'Overview';
