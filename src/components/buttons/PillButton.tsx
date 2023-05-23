import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors, textStyles } from '../../ui';

type PillButtonProps = Omit<PressableProps, 'children'> & {
  children: string;
};

export const PillButton: FC<PillButtonProps> = ({ children, ...props }) => {
  return (
    <Pressable accessible accessibilityRole="button" style={styles.button} {...props}>
      <Text style={styles.textStyle}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 10,
    backgroundColor: colors.palette.blue.blue_40,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  textStyle: {
    ...textStyles.button,
    color: colors.text.secondary,
  },
});
