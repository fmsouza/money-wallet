import { createContext, useContext } from 'react';

export const cache = {
  profile: {
    name: '',
    accountNumber: '',
    bankName: '',
    bankNumber: '',
    routingNumber: '',
  },
  error: null,
  loading: false,
  getProfile: () => {},
};

export const ProfileContext = createContext(cache);

export const useProfile = () => {
  const { error, getProfile, loading, profile } = useContext(ProfileContext);
  return { error, getProfile, loading, data: profile };
};
