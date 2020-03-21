import { createContext, useContext, useEffect, useState } from 'react';
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

export const useInsights = () => {
  const { loading, statements, getHistory } = useContext(HistoryContext);

  let months = [];
  const tmpDateList = statements.map(tx => new Date(tx.timestamp));
  if (tmpDateList.length > 0) {
    const firstTransactionDate = min(tmpDateList);
    const lastTransactionDate = max(tmpDateList);
    months = eachMonthOfInterval({
      start: firstTransactionDate,
      end: lastTransactionDate,
    });
  }

  const sortedStatements = statements.sort((tx1, tx2) =>
    compareDesc(new Date(tx1.timestamp), new Date(tx2.timestamp)),
  );

  const getMonthStatements = month =>
    sortedStatements.filter(tx => isSameMonth(new Date(tx.timestamp), month));

  return {
    getInsights: getHistory,
    loading,
    months,
    getMonthStatements,
    statements,
  };
};
