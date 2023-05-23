import React, { FC } from 'react';
import { Image, Pressable, Text } from 'react-native';

import { cardStyles } from './card.styles';

type CategoryCardProps = {
  label: string;
  url: string;
  onPress: () => void;
};

export const CategoryCard: FC<CategoryCardProps> = ({ url, onPress, label }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && cardStyles.pressed_container, cardStyles.container]}
      onPress={onPress}
    >
      <Image style={cardStyles.image} source={{ width: 117, height: 127, uri: url }} />
      <Text style={cardStyles.label}>{label}</Text>
    </Pressable>
  );
};
