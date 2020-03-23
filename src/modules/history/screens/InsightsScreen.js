import React, { useLayoutEffect, useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, isSameMonth } from 'date-fns';

import { useOnMount } from '~shared/hooks';
import { flatten, makeStyles } from '~shared/styles';
import { Container, Space } from '~shared/widgets';
import { withProviders } from '~shared/providers';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useInsights } from '~modules/history/state';
import { MonthView } from '~modules/history/widgets';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  monthsContainer: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    width: theme.maxWidth,
  },
  month: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.border,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.padding * 2,
    paddingVertical: theme.padding,
  },
  selectedMonth: {
    backgroundColor: theme.colors.border,
  },
  monthTitle: {
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
  },
}));

export const InsightsScreen = withProviders([HistoryProvider], () => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const {
    loading,
    error,
    getInsights,
    months,
    getMonthStatements,
  } = useInsights();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('insights.title'),
    });
  }, [getText, navigation]);

  useOnMount(() => getInsights());

  const handleSelectMonth = month => setSelectedMonth(month);

  const statements = getMonthStatements(selectedMonth);

  return (
    <View style={styles.container}>
      <View style={styles.monthsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {months.map(month => (
            <TouchableWithoutFeedback
              key={month.toString()}
              onPress={() => handleSelectMonth(month)}>
              <View
                style={flatten(
                  styles.month,
                  isSameMonth(month, selectedMonth) && styles.selectedMonth,
                )}>
                <Text style={styles.monthTitle}>{format(month, 'MMM yy')}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
      {statements.length > 0 && <MonthView statements={statements} />}
    </View>
  );
});

InsightsScreen.route = 'Insights';
