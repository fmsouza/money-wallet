import React, { useLayoutEffect } from 'react';
import { Linking, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { makeStyles } from '~shared/styles';
import { Container, Space } from '~shared/widgets';
import { useLocale } from '~modules/support/intl';

import pkg from '~pkg';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  dependency: {
    textDecorationLine: 'underline',
    color: theme.colors.primary,
    fontSize: 16,
    marginBottom: 8,
  },
}));

export const AboutScreen = props => {
  const styles = useStyles();
  const { getText } = useLocale();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('about.title'),
    });
  }, [getText, navigation]);

  return (
    <Container>
      <ScrollView>
        <Text style={styles.title}>
          {pkg.name} ({pkg.version})
        </Text>
        <Space height={24} />
        <Text style={styles.subtitle}>3rd-party OSS</Text>
        <Space height={12} />
        {Object.keys(pkg.dependencies).map(dep => (
          <Text
            key={dep}
            style={styles.dependency}
            onPress={() => Linking.openURL(`https://npmjs.com/package/${dep}`)}>
            {dep} ({pkg.dependencies[dep]})
          </Text>
        ))}
      </ScrollView>
    </Container>
  );
};

AboutScreen.route = 'About';
