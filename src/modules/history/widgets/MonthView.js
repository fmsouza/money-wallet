import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { makeStyles } from '~shared/styles';
import { Container, Space } from '~shared/widgets';

import { PieView } from './PieView';
import { TopExpensiveStatements } from './TopExpensiveStatements';
import { TransactionTypeView } from './TransactionTypeView';

const useStyles = makeStyles(theme => ({
  container: {
    width: theme.maxWidth,
  },
  contentContainer: {
    paddingVertical: theme.padding * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export const MonthView = ({ statements }) => {
  const styles = useStyles();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.monthViewContainer}>
      <Container style={styles.contentContainer}>
        <PieView statements={statements} />
        <Space height={32} />
        <TransactionTypeView statements={statements} />
        <Space height={32} />
        <TopExpensiveStatements statements={statements} />
      </Container>
    </ScrollView>
  );
};

MonthView.propTypes = {
  statements: PropTypes.arrayOf(PropTypes.any).isRequired,
};
