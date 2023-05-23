import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../ui';

type NumberInputProps = {
  add: () => void;
  reduce: () => void;
  value: number;
};

export const NumberInput: FC<NumberInputProps> = ({ add, value, reduce }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [pressed && styles.pressed, styles.button]}
        onPress={reduce}
      >
        <Text style={styles.text}>-</Text>
      </Pressable>
      <Text style={styles.text}>{value}</Text>
      <Pressable style={({ pressed }) => [pressed && styles.pressed, styles.button]} onPress={add}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: colors.palette.neutral.neutral_65 + '22',
  },
  button: {
    padding: 8,
  },
  text: {
    color: colors.palette.blue.blue_50,
  },
  container: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 24,
    elevation: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1.6,
    borderRadius: 4,
    backgroundColor: colors.palette.general.white,
    borderColor: colors.palette.blue.blue_50,
    shadowColor: colors.palette.blue.blue_50,
  },
});
