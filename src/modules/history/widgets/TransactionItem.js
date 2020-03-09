import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { makeStyles } from '~shared/styles';
import { Icon } from '~shared/widgets';

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
    backgroundColor: theme.colors.primary,
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
  amountLabel: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
}));

const getIcon = category => {
  switch (category) {
    case 'transport':
      return 'airport-shuttle';
    case 'health':
      return 'fitness-center';
    case 'services':
      return 'build';
    case 'market':
      return 'local-grocery-store';
    case 'shopping':
      return 'local-mall';
    case 'restaurants':
      return 'restaurant';
    case 'travel':
      return 'beach-access';
    case 'education':
      return 'library-books';
    case 'electronics':
      return 'devices-other';
    default:
      return 'build';
  }
};

export const TransactionItem = ({ tx }) => {
  const styles = useStyles();
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.iconWrapper}>
          <Icon
            name={getIcon(tx.category)}
            size={24}
            color={colors.white}
            type="md"
          />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.categoryLabel}>{tx.category}</Text>
        <Text style={styles.label}>{tx.label}</Text>
        <Text style={styles.amountLabel}>{Number(tx.amount).toFixed(2)}</Text>
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
    amount: PropTypes.number,
    datestamp: PropTypes.string,
  }).isRequired,
};
