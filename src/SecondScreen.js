import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SecondScreen = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Congratulations! You navigated to the second screen!</Text>
        <Button title="Go back" onPress={handleBackPress} />
      </View>
    </SafeAreaView>
  );
};

SecondScreen.route = 'Second';

SecondScreen.options = () => ({
  title: 'Second page',
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
