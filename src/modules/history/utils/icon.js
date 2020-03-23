export const getIconName = category => {
  switch (category) {
    case 'transport':
      return 'airport-shuttle';
    case 'health':
      return 'fitness-center';
    case 'services':
      return 'build';
    case 'market':
      return 'local-grocery-store';
    case 'shopping':
      return 'local-mall';
    case 'restaurants':
      return 'restaurant';
    case 'travel':
      return 'beach-access';
    case 'education':
      return 'library-books';
    case 'electronics':
      return 'devices-other';
    default:
      return 'build';
  }
};
