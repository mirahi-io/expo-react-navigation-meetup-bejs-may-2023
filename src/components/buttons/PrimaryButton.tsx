import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { colors, textStyles } from '../../ui';

type PrimaryButtonProps = PressableProps & { dark?: boolean; children: string };

export const PrimaryButton: FC<PrimaryButtonProps> = ({ dark = false, onPress, children }) => {
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.primary,
        dark ? styles.primaryDark : styles.primaryLight,
        pressed && styles.primary_pressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyles.button,
          { color: dark ? colors.text.secondary : colors.palette.blue.blue_65 },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary_pressed: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  primary: {
    width: '95%',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 16,
    elevation: 16,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1.6,
    borderRadius: 10,
  },
  primaryLight: {
    backgroundColor: colors.palette.general.white,
    borderColor: colors.palette.blue.blue_65,
    shadowColor: colors.palette.blue.blue_65,
  },
  primaryDark: {
    backgroundColor: colors.palette.general.black,
    borderColor: colors.palette.general.white,
    shadowColor: colors.palette.general.white,
  },
});
