import React, { createContext, useContext, useMemo, useState } from 'react';

import { DUMMY_TRANSACTIONS } from './dummy';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const HistoryContext = createContext({
  balance: 0.0,
  error: null,
  getHistory: () => {},
  loading: false,
  statements: [],
});

export const useHistory = () => {
  const { error, getHistory, loading, statements } = useContext(HistoryContext);
  return { error, getHistory, loading, data: statements };
};

export const useGetBalance = () => {
  const { error, loading, balance, getHistory } = useContext(HistoryContext);
  return { error, loading, data: balance, updateBalance: getHistory };
};

export const HistoryProvider = props => {
  const [statements, setStatements] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateBalance = () => {
    const tmp = statements.reduce((acc, next) => {
      acc += next.type === 'ingoing' ? next.amount : -next.amount;
      return acc;
    }, 0);
    setBalance(tmp);
  };

  const historyContext = {
    balance,
    loading,
    error,
    statements,
    getHistory: async () => {
      setLoading(true);
      await sleep(1000);
      setStatements(DUMMY_TRANSACTIONS);
      calculateBalance();
      setLoading(false);
    },
  };

  return <HistoryContext.Provider value={historyContext} {...props} />;
};
