import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, isThisMonth } from 'date-fns';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { useOnMount } from '~shared/hooks';
import { withProviders } from '~shared/providers';

import { useLocale } from '~modules/history/intl';
import { HistoryProvider, useInsights } from '~modules/history/state';
import {
  getStatementsFromBucket,
  groupStatementsByMonth,
} from '~modules/history/utils';
import { MonthView } from '~modules/history/widgets';

export const InsightsScreen = withProviders([HistoryProvider], () => {
  const { getText } = useLocale();
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const {
    loading,
    error,
    statements,
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

  useEffect(() => {
    if (months.length > 0) {
      const index = months.findIndex(mo => isThisMonth(mo));
      swiperRef.current.scrollToIndex({ index });
    }
  }, [months]);

  const buckets = groupStatementsByMonth(statements);

  return (
    <SwiperFlatList
      renderAll
      ref={swiperRef}
      data={months}
      keyExtractor={item => format(item, 'MMyyyy')}
      renderItem={({ item, index }) => (
        <MonthView
          month={item}
          statements={getStatementsFromBucket(item, buckets)}
          isFirst={index === 0}
          isLast={index === months.length - 1}
        />
      )}
    />
  );
});

InsightsScreen.route = 'Insights';
