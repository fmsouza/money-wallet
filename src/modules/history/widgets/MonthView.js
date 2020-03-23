import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { format } from 'date-fns';

import { makeStyles } from '~shared/styles';
import { Container, Icon, Space } from '~shared/widgets';

import { PieView } from './PieView';
import { TopExpensiveStatements } from './TopExpensiveStatements';
import { TransactionTypeView } from './TransactionTypeView';

const useStyles = makeStyles(theme => ({
  container: {
    width: theme.maxWidth,
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.padding,
    backgroundColor: theme.colors.border,
  },
  monthLabel: {
    color: theme.colors.text,
    fontSize: 16,
  },
  contentContainer: {
    paddingVertical: theme.padding * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export const MonthView = ({ isFirst, isLast, month, statements }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        <View style={styles.leading}>
          {!isFirst && <Icon name="chevron-left" />}
        </View>
        <View style={styles.middle}>
          <Text style={styles.monthLabel}>{format(month, 'MMM yyyy')}</Text>
        </View>
        <View style={styles.trailing}>
          {!isLast && <Icon name="chevron-right" />}
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.monthViewContainer}>
        <Container style={styles.contentContainer}>
          <PieView statements={statements} />
          <Space height={32} />
          <TransactionTypeView statements={statements} />
          <Space height={32} />
          <TopExpensiveStatements statements={statements} />
        </Container>
      </ScrollView>
    </View>
  );
};

MonthView.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  month: PropTypes.object.isRequired,
  statements: PropTypes.arrayOf(PropTypes.any).isRequired,
};

MonthView.defaultProps = {
  isFirst: false,
  isLast: false,
};
