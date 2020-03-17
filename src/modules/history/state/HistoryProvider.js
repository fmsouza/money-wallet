import React, { createContext, useContext, useMemo, useState } from 'react';

import { DUMMY_TRANSACTIONS } from './dummy';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const HistoryContext = createContext({
  loading: false,
  error: null,
  data: [],
  getHistory: () => {},
});

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const historyContext = {
    data,
    loading,
    error,
    getHistory: async () => {
      console.log('loading data...');
      setLoading(true);
      await sleep(5000);
      setData(DUMMY_TRANSACTIONS);
      setLoading(false);
      console.log('finished loading');
    },
  };

  return <HistoryContext.Provider value={historyContext} {...props} />;
};
