export default {
  settings: {
    title: 'Settings',
    items: {
      security: {
        title: 'Security',
        subtitle: 'Manage your account security',
      },
      localization: {
        title: 'Localization',
        subtitle: 'Language & Currency',
      },
      notifications: {
        title: 'Notifications',
        subtitle: 'Configure push notifications',
      },
      darkMode: {
        title: 'Dark mode',
        subtitle: 'Toggle dark mode',
      },
      about: {
        title: 'About',
        subtitle: 'About the app',
      },
    },
  },

  localization: {
    title: 'Language & Currency',
    items: {
      language: {
        title: 'Select language',
        options: [
          {
            label: 'English',
            value: 'en',
          },
          {
            label: 'Portuguese',
            value: 'pt',
          },
        ],
      },
      currency: {
        title: 'Select currency',
      },
    },
  },
};
