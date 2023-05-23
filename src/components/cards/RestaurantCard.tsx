import React, { FC } from 'react';
import { Image, Pressable, Text } from 'react-native';

import { cardStyles } from './card.styles';

type RestaurantCardProps = {
  label: string;
  url: string;
  onPress: () => void;
};

export const RestaurantCard: FC<RestaurantCardProps> = ({ url, onPress, label }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && cardStyles.pressed_container, cardStyles.container]}
      onPress={onPress}
    >
      <Image style={cardStyles.image} source={{ width: 284, height: 127, uri: url }} />
      <Text style={cardStyles.label}>{label}</Text>
    </Pressable>
  );
};
