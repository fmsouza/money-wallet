import React, { useMemo, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '~app/theme';

const getTheme = darkModeEnabled => (darkModeEnabled ? darkTheme : lightTheme);

const ThemeContext = React.createContext(lightTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [theme, setTheme] = useState(getTheme(darkModeEnabled));

  useEffect(() => {
    const newTheme = getTheme(darkModeEnabled);
    setTheme(newTheme);
  }, [darkModeEnabled]);

  const themeContext = useMemo(() => {
    const enableDarkMode = enable => setDarkModeEnabled(Boolean(enable));
    const darkMode = darkModeEnabled;
    return { darkMode, enableDarkMode, theme };
  }, [darkModeEnabled, theme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
