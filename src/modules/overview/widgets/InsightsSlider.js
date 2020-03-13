import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import SideSwipe from 'react-native-sideswipe';

import { makeStyles } from '~shared/styles';
import { SliderItem } from './SliderItem';
import { Icon } from '~shared/widgets';

const { width } = Dimensions.get('window');

const DUMMY = [{ title: 'Foo' }, { title: 'Bar' }, { title: 'Foo Baz' }];

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const InsightsSlider = props => {
  const styles = useStyles();
  const [items, setItems] = useState(DUMMY);
  const [activeSlide, setActiveSlide] = useState(0);
  const contentOffset = (width - SliderItem.WIDTH) / 2;
  return (
    <View style={styles.container}>
      <View>
        <SideSwipe
          index={activeSlide}
          itemWidth={SliderItem.WIDTH}
          style={styles.carouselContainer}
          contentContainerStyle={styles.contentContainer}
          data={items}
          contentOffset={contentOffset}
          onIndexChange={setActiveSlide}
          renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
            <SliderItem
              item={item}
              index={itemIndex}
              currentIndex={currentIndex}
              animatedValue={animatedValue}
            />
          )}
        />
      </View>
      <View>
        <Icon name={`hexagon-slice-${(activeSlide + 1) * 2}`} />
      </View>
    </View>
  );
};
