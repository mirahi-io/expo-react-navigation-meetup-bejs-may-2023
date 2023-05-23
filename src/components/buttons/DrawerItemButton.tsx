import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors, textStyles } from '../../ui';

type DrawerItemButtonProps = Omit<PressableProps, 'children'> & {
  children: string;
};

export const DrawerItemButton: FC<DrawerItemButtonProps> = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      accessible
      accessibilityRole="button"
      onPress={onPress}
    >
      <Text style={styles.textItem}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.75,
  },
  textItem: {
    ...textStyles.h1,
    textTransform: 'uppercase',
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
