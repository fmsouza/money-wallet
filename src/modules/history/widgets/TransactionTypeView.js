import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { flatten, makeStyles } from '~shared/styles';
import { Space } from '~shared/widgets';
import { useTheme } from '~shared/providers';

import { totalBy } from '~modules/history/utils';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    width: theme.maxWidth * 0.9,
    paddingVertical: theme.padding,
    paddingHorizontal: theme.padding * 2,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  barColumn: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
  volumeBar: {
    width: theme.maxWidth * 0.5,
    height: 16,
    backgroundColor: 'red',
  },
}));

export const TransactionTypeView = ({ statements }) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const incoming = totalBy(stmn => stmn.type === 'incoming', statements);
  const expenses = totalBy(stmn => stmn.type === 'outgoing', statements);
  const total = incoming + expenses;
  const barBaseWidth = (theme.maxWidth * 0.5) / total;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Incoming</Text>
          <Text style={styles.value}>${incoming.toFixed(2)}</Text>
        </View>
        <View style={flatten(styles.column, styles.barColumn)}>
          <View
            style={flatten(styles.volumeBar, {
              backgroundColor: '#85bb65',
              width: barBaseWidth * incoming,
            })}
          />
        </View>
      </View>
      <Space height={8} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Expenses</Text>
          <Text style={styles.value}>${expenses.toFixed(2)}</Text>
        </View>
        <View style={flatten(styles.column, styles.barColumn)}>
          <View
            style={flatten(styles.volumeBar, {
              backgroundColor: '#bb0023',
              width: barBaseWidth * expenses,
            })}
          />
        </View>
      </View>
    </View>
  );
};

TransactionTypeView.propTypes = {
  statements: PropTypes.arrayOf(PropTypes.any),
};
