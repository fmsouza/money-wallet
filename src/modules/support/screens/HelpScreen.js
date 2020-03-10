import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Expandable } from '~shared/widgets';

import { DUMMY_FAQ } from './dummy';

export const HelpScreen = props => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'How can we help you?',
    });
  }, [navigation]);

  return (
    <Container>
      <FlatList
        data={DUMMY_FAQ}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Expandable title={item.title} description={item.description} />
        )}
      />
    </Container>
  );
};

HelpScreen.route = 'Help';
