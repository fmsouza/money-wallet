import React from 'react';

export const withProviders = (providers, Component) => () =>
  providers.reduce((prev, Next) => <Next children={prev} />, <Component />);
