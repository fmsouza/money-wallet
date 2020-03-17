import React, { useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from '~shared/widgets';
import { useLocale } from '~modules/support/intl';

export const AboutScreen = props => {
  const navigation = useNavigation();
  const { getText } = useLocale();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getText('about.title'),
    });
  }, [getText, navigation]);

  return (
    <Container>
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a iaculis
          ipsum, a placerat odio. Morbi bibendum vel velit in rutrum. Ut
          pellentesque, neque sit amet laoreet maximus, libero metus eleifend
          diam, eu condimentum felis ante id tortor. Vivamus posuere eu augue
          vitae congue. Phasellus id auctor lectus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Donec tincidunt ornare lorem ut
          tempor. Aenean ut risus mi. Donec lacinia finibus leo eu luctus. Nulla
          dictum ligula dictum mi lacinia, scelerisque feugiat tortor accumsan.
          Vivamus metus tellus, tincidunt at magna lacinia, maximus iaculis
          tortor. Pellentesque et leo ultricies, posuere lectus et, porta risus.
        </Text>
        <Text>
          Aliquam erat volutpat. Cras pretium eget justo eget accumsan.
          Phasellus porttitor ipsum non elit fringilla faucibus. Vestibulum et
          vehicula tortor, et convallis tortor. Nunc ex dui, gravida quis
          tristique sit amet, varius ac mauris. Vestibulum fringilla luctus ante
          a viverra. Nunc commodo convallis dolor, eu semper dui hendrerit a.
          Donec rutrum elit nec erat varius congue. Aenean pellentesque justo
          nec risus laoreet aliquam.
        </Text>
        <Text>
          Aenean pharetra pellentesque dui, id ullamcorper risus convallis ut.
          Vivamus commodo sit amet felis id vehicula. In hac habitasse platea
          dictumst. Nullam sagittis dolor ac velit fermentum, sed egestas purus
          vestibulum. Donec volutpat augue at quam volutpat mollis. Nunc augue
          velit, semper quis cursus at, laoreet in leo. Nulla pretium sapien in
          eros ornare auctor.
        </Text>
        <Text>
          Ut mauris metus, tristique auctor nibh ut, vehicula malesuada lacus.
          Integer ligula justo, tincidunt ut orci non, faucibus vestibulum quam.
          Quisque porttitor, tellus cursus consequat scelerisque, lectus ante
          malesuada felis, vitae condimentum augue eros bibendum orci. Sed a
          maximus dolor, volutpat accumsan nunc. Cras ut finibus nisl. Nam at
          ullamcorper nulla, nec bibendum tellus. Sed ac fermentum lacus.
          Phasellus mattis a libero ac hendrerit. Phasellus mattis feugiat elit
          ac mattis. Duis urna sem, sodales quis arcu vel, sollicitudin ultrices
          lectus. Phasellus luctus ac massa vitae condimentum. Maecenas
          facilisis elementum nulla, ullamcorper venenatis lacus finibus sed.
          Duis faucibus tempus risus, at vehicula elit pharetra at.
        </Text>
        <Text>
          Sed vel lorem semper, vestibulum ante non, rutrum libero. Proin
          feugiat molestie urna sed euismod. Duis sit amet lacus placerat,
          viverra dolor sed, feugiat nulla. Aliquam pellentesque eget metus at
          ullamcorper. Sed et maximus purus, et pretium ex. Proin dignissim
          tellus sit amet felis blandit imperdiet. Vivamus iaculis, dui eleifend
          luctus semper, dolor orci maximus erat, vel cursus nibh augue ut
          mauris. Vivamus eu commodo lacus. Fusce finibus lobortis dictum.
        </Text>
      </ScrollView>
    </Container>
  );
};

AboutScreen.route = 'About';
