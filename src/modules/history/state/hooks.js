import { createContext, useContext } from 'react';
import {
  eachMonthOfInterval,
  isSameMonth,
  min,
  max,
  compareDesc,
} from 'date-fns';

export const cache = {
  balance: 0.0,
  error: null,
  getHistory: () => {},
  loading: false,
  statements: [],
};

export const HistoryContext = createContext(cache);

export const useHistory = () => {
  const { error, getHistory, loading, statements } = useContext(HistoryContext);
  return { error, getHistory, loading, data: statements };
};

export const useGetBalance = () => {
  const { error, loading, statements, balance, getHistory } = useContext(
    HistoryContext,
  );
  const updateBalance = () => {
    if (statements.length > 0) return;
    getHistory();
  };
  return { error, loading, data: balance, updateBalance };
};
