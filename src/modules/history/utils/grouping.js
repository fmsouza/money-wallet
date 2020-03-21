import { randomColor } from '~shared/styles';

export const calculateTotalByCategory = statements =>
  statements
    .filter(stmn => Number(stmn.amount) > 0 && stmn.type === 'outgoing')
    .reduce((map, statement) => {
      map[statement.category] = map[statement.category]
        ? map[statement.category] + statement.amount
        : statement.amount;
      return map;
    }, {});

export const convertToPieSlices = (totalByCategory, onPressSlice) =>
  Object.keys(totalByCategory).map(category => ({
    key: `pie-${category}`,
    title: category.charAt(0).toUpperCase() + category.slice(1),
    value: Number(totalByCategory[category]),
    svg: {
      fill: randomColor(),
      onPress: onPressSlice || (() => {}),
    },
  }));
