import { randomColor } from '~shared/styles';

export const calculateTotalExpenses = statements =>
  statements
    .filter(st => st.type === 'outgoing')
    .map(st => Number(st.amount))
    .reduce((acc, amount) => acc + amount, 0);

export const calculateTotalByCategory = statements =>
  statements
    .filter(stmn => Number(stmn.amount) > 0 && stmn.type === 'outgoing')
    .reduce((map, statement) => {
      map[statement.category] = map[statement.category]
        ? map[statement.category] + Number(statement.amount)
        : Number(statement.amount);
      return map;
    }, {});

export const totalBy = (filter, statements) =>
  statements.filter(filter).reduce((acc, item) => acc + Number(item.amount), 0);

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
