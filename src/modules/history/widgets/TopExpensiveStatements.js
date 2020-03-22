import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { makeStyles } from '~shared/styles';
import { useLocale } from '~modules/history/intl';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: theme.maxWidth * 0.9,
    backgroundColor: theme.colors.border,
    padding: theme.padding * 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.margin,
  },
  statementContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statementLabel: {
    marginVertical: theme.margin,
    fontSize: 16,
    maxWidth: '60%',
  },
  statementAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export const TopExpensiveStatements = ({ size, statements }) => {
  const styles = useStyles();
  const { getText, selectedCurrency } = useLocale();

  const topStatements = statements
    .sort((st1, st2) => Number(st2.amount) - Number(st1.amount))
    .slice(0, size);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {getText('insights.topExpenses', { size })}
      </Text>
      {topStatements.map((stmnt, index) => (
        <View key={index} style={styles.statementContainer}>
          <Text
            style={styles.statementLabel}
            numberOfLines={1}
            ellipsizeMode="tail">
            {index + 1}. {stmnt.label}
          </Text>
          <Text style={styles.statementAmount}>
            {selectedCurrency.symbol} {stmnt.amount}
          </Text>
        </View>
      ))}
    </View>
  );
};

TopExpensiveStatements.propTypes = {
  size: PropTypes.number,
  statements: PropTypes.arrayOf(PropTypes.any),
};

TopExpensiveStatements.defaultProps = {
  size: 3,
};
