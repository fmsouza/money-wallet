import React, { useLayoutEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { useOnMount } from '~shared/hooks';
import { useTheme, withProviders } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Container, Icon } from '~shared/widgets';

import { InsightsScreen, StatementsScreen } from '~modules/history/screens';
import {
  Balance,
  MonthExpenses,
  LatestTransaction,
} from '~modules/history/widgets';

import { useLocale } from '~modules/overview/intl';
import { OperationItem, SliderItem } from '~modules/overview/widgets';

import { ProfileScreen } from '~modules/profile/screens';
import { ProfileProvider, useProfile } from '~modules/profile/state';

import { SettingsScreen } from '~modules/settings/screens';

import { HelpScreen } from '~modules/support/screens';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  rightHeaderContainer: {
    marginRight: 10,
  },
  container: {
    backgroundColor: theme.colors.primary,
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

export const OverviewScreen = withProviders([ProfileProvider], () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const { data: profile, getProfile } = useProfile();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('overview.greeting', { name: profile.name }),
      headerRight: () => (
        <View style={styles.rightHeaderContainer}>
          <Icon.Button
            name="account-circle"
            color={theme.navbar.headerTintColor}
            onPress={() => navigation.navigate(ProfileScreen.route)}
          />
        </View>
      ),
    });
  }, [
    theme.navbar.headerTintColor,
    getText,
    navigation,
    styles.rightHeaderContainer,
    profile.name,
  ]);

  useOnMount(() => getProfile());

  const onHandleNotImplemented = () => {
    Alert.alert('Not implemented', 'This action was not implemented yet.');
  };

  return (
    <View style={styles.wrapper}>
      <Container style={styles.container}>
        <View style={styles.content}>
          <View style={styles.balanceWrapper}>
            <Balance />
          </View>
          <SwiperFlatList
            renderAll
            showPagination
            paginationDefaultColor={theme.colors.invertedText}
            paginationActiveColor={theme.colors.primaryDarker}>
            <SliderItem
              onPress={() => navigation.navigate(StatementsScreen.route)}>
              <LatestTransaction />
            </SliderItem>
            <SliderItem
              onPress={() => navigation.navigate(StatementsScreen.route)}>
              <MonthExpenses />
            </SliderItem>
          </SwiperFlatList>
        </View>
      </Container>
      <View style={styles.footer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OperationItem
            title={getText('overview.operations.statements')}
            icon="format-list-bulleted"
            onPress={() => navigation.navigate(StatementsScreen.route)}
          />
          <OperationItem
            title={getText('overview.operations.insights')}
            icon="finance"
            onPress={() => navigation.navigate(InsightsScreen.route)}
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
});

OverviewScreen.route = 'Overview';
