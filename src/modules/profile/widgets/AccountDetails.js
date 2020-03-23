import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { makeStyles } from '~shared/styles';
import { useLocale } from '~modules/profile/intl';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.border,
    borderRadius: 8,
    padding: theme.padding,
    width: theme.maxWidth - theme.margin * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // eslint-disable-line sonarjs/no-duplicate-string
    justifyContent: 'space-evenly',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: theme.margin / 2,
  },
  description: {
    color: theme.colors.text,
    fontSize: 18,
    marginBottom: 16,
  },
  label: {
    color: theme.colors.text,
    fontSize: 16,
  },
  hint: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export const AccountDetails = ({
  accountNumber,
  routingNumber,
  bankName,
  bankNumber,
}) => {
  const styles = useStyles();
  const { getText } = useLocale();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.description}>
          {getText('profile.accountDetails.title')}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{bankName}</Text>
        <Text style={styles.hint}> ({bankNumber})</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>{accountNumber}</Text>
        <Text style={styles.label}>
          {' '}
          •{' '}
          {getText('profile.accountDetails.routingLabel', {
            value: routingNumber,
          })}
        </Text>
      </View>
    </View>
  );
};

AccountDetails.propTypes = {
  accountNumber: PropTypes.string.isRequired,
  routingNumber: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  bankNumber: PropTypes.string.isRequired,
};
