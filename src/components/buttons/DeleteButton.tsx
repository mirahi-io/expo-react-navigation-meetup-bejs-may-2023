import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, textStyles } from '../../ui';

type DeleteButtonProps = {
  onPress: () => void;
};

export const DeleteButton: FC<DeleteButtonProps> = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.container]}
      onPress={onPress}
    >
      <MaterialIcons name="delete-outline" size={13} color={colors.palette.neutral.neutral_65} />
      <Text style={styles.text}>Delete</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
  },
  text: {
    ...textStyles.textSmall,
    color: colors.palette.neutral.neutral_65,
  },
});
