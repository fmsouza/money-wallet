import React, { useLayoutEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { Container, Icon } from '~shared/components';
import { makeStyles } from '~shared/styles';
import { SecondScreen } from './SecondScreen';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightHeaderContainer: {
    marginRight: 10,
  },
}));

export const HomeScreen = () => {
  const styles = useStyles();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const handleButtonTap = () => {
    setCount(c => c + 1);
  };

  const handleNextPagePress = () => {
    navigation.navigate(SecondScreen.route);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.rightHeaderContainer}>
          <Icon.Button
            name="plus"
            color={colors.white}
            onPress={handleButtonTap}
          />
        </View>
      ),
    });
  }, [navigation, setCount]);

  return (
    <Container style={styles.container}>
      <Text>Count: {count}</Text>
      <Button
        title="Next page"
        onPress={handleNextPagePress}
        color={colors.secondary}
      />
    </Container>
  );
};

HomeScreen.route = 'Home';

HomeScreen.options = () => ({
  title: 'Home',
});
