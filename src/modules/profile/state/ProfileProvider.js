import React, { useState } from 'react';

import DUMMY_PROFILE from './dummy_profile';
import { cache, ProfileContext } from './hooks';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const ProfileProvider = props => {
  const [error, setError] = useState(cache.error);
  const [loading, setLoading] = useState(cache.loading);
  const [profile, setProfile] = useState(cache.profile);

  const updateError = data => {
    setError(data);
    cache.error = data;
  };

  const updateLoading = data => {
    setLoading(data);
    cache.loading = data;
  };

  const updateProfile = data => {
    setProfile(data);
    cache.profile = data;
  };

  const profileContext = {
    loading,
    error,
    profile,
    getProfile: async () => {
      updateLoading(true);
      await sleep(100);
      updateProfile(DUMMY_PROFILE);
      updateLoading(false);
    },
  };

  return <ProfileContext.Provider value={profileContext} {...props} />;
};
