import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors, textStyles } from '../../ui';

type TextButtonProps = Omit<PressableProps, 'children'> & {
  children: string;
};

export const TextButton: FC<TextButtonProps> = ({ children, ...props }) => {
  return (
    <Pressable accessible accessibilityRole="button" style={styles.button} {...props}>
      <Text style={styles.cancelTextStyle}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  cancelTextStyle: {
    ...textStyles.button,
    color: colors.text.primary,
  },
});
