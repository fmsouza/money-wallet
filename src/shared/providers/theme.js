import React, { useMemo, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '~app/theme';

const getTheme = darkModeEnabled => (darkModeEnabled ? darkTheme : lightTheme);

const ThemeContext = React.createContext({});

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return { theme };
};

export const useDarkMode = () => {
  const { darkMode, enableDarkMode } = useContext(ThemeContext);
  return { darkMode, enableDarkMode };
};

export const ThemeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [theme, setTheme] = useState(getTheme(darkModeEnabled));

  useEffect(() => {
    const newTheme = getTheme(darkModeEnabled);
    setTheme(newTheme);
  }, [darkModeEnabled]);

  const themeContext = {
    enableDarkMode: enable => setDarkModeEnabled(Boolean(enable)),
    darkMode: darkModeEnabled,
    theme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
