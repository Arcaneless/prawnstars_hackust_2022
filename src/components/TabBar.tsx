import React, { useCallback, useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useImmer } from 'use-immer';

interface PropTypes {
  tabNames: string[];
  onTabPress?: (index: number) => void;
  selectedIndex: number;
  color?: string;
}

const TabBar: React.FC<PropTypes> = ({ tabNames, onTabPress, selectedIndex, color }) => {
  const [itemsLayout, updateItemsLayout] = useImmer(
    tabNames.map((_, i) => {
      return { width: 0, x: 0 };
    }),
  );
  const indicatorDecimal = useSharedValue(0);
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollOffset.value = e.contentOffset.x;
  });

  useEffect(() => {
    indicatorDecimal.value = itemsLayout[selectedIndex].x - scrollOffset.value;
  }, [itemsLayout]);

  useEffect(() => {
    indicatorDecimal.value = withSpring(itemsLayout[selectedIndex].x, {
      stiffness: 150,
      damping: 20,
      mass: 1,
    });
  }, [selectedIndex, itemsLayout]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: indicatorDecimal.value - scrollOffset.value,
      },
    ],
  }));

  const renderIndicator = useCallback(() => {
    return (
      <Animated.View
        style={[
          styles.indicator,
          {
            backgroundColor: color ?? 'black',
            width: itemsLayout[selectedIndex].width,
          },
          indicatorStyle,
        ]}
      />
    );
  }, [itemsLayout, selectedIndex, indicatorStyle, color]);

  const renderTabComponent = useCallback(
    (tab: string, index: number) => {
      return (
        <Pressable
          key={`pressable-${index}-${tab}`}
          onLayout={e => {
            const nativeEvent = e.nativeEvent;
            if (!!e?.nativeEvent) {
              updateItemsLayout(draft => {
                draft[index] = {
                  x: nativeEvent.layout.x,
                  width: nativeEvent.layout.width,
                };
              });
            }
          }}
          style={styles.tabContainer}
          onPress={() => onTabPress?.(index)}
        >
          <Animated.Text
            style={[
              styles.tabText,
              {
                color: index === selectedIndex ? color ?? 'black' : 'grey',
              },
            ]}
          >
            {tab}
          </Animated.Text>
        </Pressable>
      );
    },
    [selectedIndex, color],
  );

  return (
    <Animated.View>
      {renderIndicator()}
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={[styles.container, { backgroundColor: 'white' }]}
      >
        {tabNames.map(renderTabComponent)}
        <View style={{ paddingRight: 20 }} />
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginHorizontal: -22,
  },
  tabContainer: {
    marginHorizontal: 10,
    paddingVertical: 4,
  },
  tabText: {
    fontSize: 14,
  },
  indicator: {
    position: 'absolute',
    height: 2,
    width: 10,
    bottom: 0,
    zIndex: 100,
    left: 10,
    marginHorizontal: -22,
  },
});

export default TabBar;
