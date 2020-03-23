import { format } from 'date-fns';

const CATEGORIES_COLORS = [
  '#4F7CAC',
  '#FF3E41',
  '#8CB369',
  '#3A015C',
  '#000F08',
  '#FF4D80',
  '#322214',
  '#FFD23F',
  '#08BDBD',
  '#03191E',
  '#272727',
];

export const calculateTotalExpenses = statements =>
  statements
    .filter(st => st.type === 'outgoing')
    .reduce((acc, st) => acc + Number(st.amount), 0);

export const calculateTotalByCategory = statements =>
  statements
    .filter(stmn => Number(stmn.amount) > 0 && stmn.type === 'outgoing')
    .reduce((map, statement) => {
      if (!map[statement.category]) map[statement.category] = 0;
      map[statement.category] += Number(statement.amount);
      return map;
    }, {});

export const totalBy = (filter, statements) =>
  statements.filter(filter).reduce((acc, item) => acc + Number(item.amount), 0);

export const convertToPieSlices = (totalByCategory, onPressSlice) => {
  let colorIndex = 0 % CATEGORIES_COLORS.length;
  return Object.keys(totalByCategory).map(category => ({
    key: `pie-${category}`,
    title: category.charAt(0).toUpperCase() + category.slice(1),
    value: Number(totalByCategory[category]),
    svg: {
      fill: CATEGORIES_COLORS[colorIndex++],
      onPress: onPressSlice || (() => {}),
    },
  }));
};

const BUCKET_KEY_FORMAT = 'MMM-yyyy';

export const groupStatementsByMonth = statements =>
  statements.reduce((map, stmnt) => {
    const month = format(new Date(stmnt.timestamp), BUCKET_KEY_FORMAT);
    if (!map[month]) map[month] = [];
    map[month].push(stmnt);
    return map;
  }, {});

export const getStatementsFromBucket = (month, buckets) =>
  buckets[format(month, BUCKET_KEY_FORMAT)];
