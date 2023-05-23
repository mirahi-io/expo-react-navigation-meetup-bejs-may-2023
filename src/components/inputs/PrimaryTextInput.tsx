import React, { FC } from 'react';
import { StyleSheet, Text, TextInput as RNTextInput, TextInputProps, View } from 'react-native';

import { colors, textStyles } from '../../ui';

type PrimaryTextInputProps = TextInputProps & {
  label: string;
  error?: string;
};

export const PrimaryTextInput: FC<PrimaryTextInputProps> = ({ label, error, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.input, styles.label]}>{label}</Text>
      <RNTextInput
        style={[styles.input, styles.inputDark]}
        placeholderTextColor={colors.palette.neutral.neutral_65}
        {...props}
      />
      <Text style={[textStyles.textSmall, styles.error]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingBottom: 8 },
  label: { color: colors.text.secondary, marginBottom: 8, textTransform: 'uppercase' },
  error: { color: colors.palette.crimson.crimson_60 },
  input: {
    height: 46,
    borderRadius: 4,
    borderWidth: 1.6,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 8,
  },
  inputDark: {
    borderColor: colors.palette.white,
    color: colors.text.secondary,
  },
});
