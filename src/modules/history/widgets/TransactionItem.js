import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { formatDistanceToNow } from 'date-fns';

import { useTheme } from '~shared/providers';
import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

import { getIconName } from '~modules/history/utils';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 80,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.padding,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: theme.margin,
  },
  categoryLabel: {
    color: theme.colors.primary,
    fontSize: 14,
  },
  label: {
    color: theme.colors.text,
    fontSize: 16,
  },
  timestamp: {
    color: theme.colors.text,
    fontSize: 14,
  },
  amountLabel: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  rightColumn: {
    maxWidth: '60%',
  },
  trailing: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 100,
  },
}));

export const TransactionItem = ({ tx }) => {
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.leading}>
        <View style={styles.iconWrapper}>
          <Icon
            name={getIconName(tx.category)}
            size={24}
            color={theme.colors.white}
            type="md"
          />
        </View>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.rightColumn}>
          <Text style={styles.categoryLabel}>{tx.category}</Text>
          <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail">
            {tx.label}
          </Text>
          <Text style={styles.timestamp}>
            {formatDistanceToNow(new Date(tx.timestamp))}
          </Text>
        </View>
        <View style={styles.trailing}>
          <Text style={styles.amountLabel}>{Number(tx.amount).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

TransactionItem.propTypes = {
  tx: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    timestamp: PropTypes.string,
  }).isRequired,
};
