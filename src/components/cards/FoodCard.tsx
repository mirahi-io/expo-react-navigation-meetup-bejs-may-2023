import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { cardStyles } from './card.styles';
import { textStyles } from '../../ui';
import { DeleteButton } from '../buttons';
import { NumberInput } from '../inputs';

type FoodCardProps = {
  label: string;
  url: string;
  onPress?: () => void;
  description: string;
  price: number;
  amount?: number;
  onDelete: () => Promise<void>;
  onReduce: () => Promise<void>;
  onAdd: () => Promise<void>;
};

export const FoodCard: FC<FoodCardProps> = ({
  url,
  onPress,
  label,
  description,
  price,
  amount,
  onDelete,
  onReduce,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        disabled={!onPress}
        style={({ pressed }) => pressed && cardStyles.pressed_container}
        onPress={onPress}
      >
        <Image style={cardStyles.image} source={{ width: 128, height: 170, uri: url }} />
      </Pressable>
      <View style={styles.body}>
        <Pressable
          disabled={!onPress}
          style={({ pressed }) => pressed && cardStyles.pressed_container}
          onPress={onPress}
        >
          <Text numberOfLines={1} style={textStyles.cardTitle}>
            {label}
          </Text>
          <Text style={textStyles.cardSubtitle}>€{price.toFixed(2)}</Text>
          <Text numberOfLines={1} style={textStyles.cardSubtitle}>
            {description}
          </Text>
        </Pressable>
        {amount ? (
          <View style={styles.footer}>
            <NumberInput value={amount} add={onAdd} reduce={onReduce} />
            <DeleteButton onPress={onDelete} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
  },
  body: {
    overflow: 'hidden',
    width: 190,
    rowGap: 4,
    height: 170,
  },
  footer: {
    flex: 1,
    rowGap: 4,
    justifyContent: 'flex-end',
  },
});
