import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { PieChart } from 'react-native-svg-charts';

import { flatten, makeStyles } from '~shared/styles';

import {
  calculateTotalByCategory,
  convertToPieSlices,
} from '~modules/history/utils';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // eslint-disable-line sonarjs/no-duplicate-string
  },
  pieChart: {
    width: theme.maxWidth * 0.5,
    height: theme.maxWidth * 0.5,
  },
  items: {
    marginLeft: theme.margin * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  categoryItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: theme.margin / 2,
  },
  categoryColorIndicator: {
    width: 16,
    height: 16,
    marginRight: theme.margin,
  },
  categoryTitle: {
    color: theme.colors.text,
    fontSize: 16,
  },
}));

export const PieView = ({ statements }) => {
  const styles = useStyles();

  const totalByCategory = calculateTotalByCategory(statements);
  const pieSlices = convertToPieSlices(totalByCategory);

  return (
    <View style={styles.container}>
      <PieChart
        style={styles.pieChart}
        data={pieSlices}
        innerRadius={0}
        padAngle={0}
      />
      <View style={styles.items}>
        {pieSlices.map(slice => (
          <View key={slice.title} style={styles.categoryItem}>
            <View
              style={flatten(styles.categoryColorIndicator, {
                backgroundColor: slice.svg.fill,
              })}
            />
            <Text style={styles.categoryTitle}>{slice.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

PieView.propTypes = {
  statements: PropTypes.arrayOf(PropTypes.any),
};
