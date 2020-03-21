import React, { useState, useEffect, useCallback } from 'react';

import { DUMMY_TRANSACTIONS } from './dummy';

import { cache, HistoryContext } from './hooks';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const HistoryProvider = props => {
  const [balance, setBalance] = useState(cache.balance);
  const [error, setError] = useState(cache.error);
  const [loading, setLoading] = useState(cache.loading);
  const [statements, setStatements] = useState(cache.statements);

  const updateError = data => {
    setError(data);
    cache.error = data;
  };

  const updateLoading = data => {
    setLoading(data);
    cache.loading = data;
  };

  const updateStatements = data => {
    setStatements(data);
    cache.statements = data;
  };

  const calculateBalance = useCallback(() => {
    const tmp = statements.reduce((acc, next) => {
      acc += next.type === 'ingoing' ? next.amount : -next.amount;
      return acc;
    }, 0);
    setBalance(tmp);
    cache.balance = tmp;
  }, [statements, setBalance]);

  useEffect(() => {
    calculateBalance();
  }, [calculateBalance, statements]);

  const historyContext = {
    balance,
    loading,
    error,
    statements,
    getHistory: async () => {
      updateLoading(true);
      await sleep(1000);
      updateStatements(DUMMY_TRANSACTIONS);
      calculateBalance();
      updateLoading(false);
    },
  };

  return <HistoryContext.Provider value={historyContext} {...props} />;
};
