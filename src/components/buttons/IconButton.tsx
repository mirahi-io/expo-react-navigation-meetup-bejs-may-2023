import { FC, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextStyle } from 'react-native';

type IconButtonProps = {
  onPress: () => void;
  icon: ReactNode;
  children: string;
  textStyle?: TextStyle;
};

export const IconButton: FC<IconButtonProps> = ({ onPress, icon, children, textStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.container]}
      onPress={onPress}
    >
      {icon}
      <Text style={textStyle}>{children}</Text>
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
    alignItems: 'center',
  },
});
