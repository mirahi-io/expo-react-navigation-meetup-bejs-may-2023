import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/routers';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { PrivateStackParamList } from '../../../types';
import { colors } from '../../../ui';

export const DrawerCloseButton = () => {
  const { dispatch } = useNavigation<NativeStackNavigationProp<PrivateStackParamList>>();

  return (
    <Pressable
      onPress={() => dispatch(DrawerActions.closeDrawer())}
      style={({ pressed }) => pressed && styles.pressedClose}
    >
      <MaterialIcons name="close" size={32} color={colors.palette.white} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedClose: { opacity: 0.75 },
});
