import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Expandable } from '~shared/widgets';
import { useLocale } from '~modules/support/intl';

import { DUMMY_FAQ } from './dummy';

export const HelpScreen = props => {
  const navigation = useNavigation();
  const { getText } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('support.title'),
    });
  }, [getText, navigation]);

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
