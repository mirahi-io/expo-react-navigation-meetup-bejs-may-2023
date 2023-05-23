import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';

import { PrivateStackParamList } from '../../../types';
import { commonStyles } from '../../../ui';
import { routesStyles } from '../routes.styles';

export const DrawerMenuButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<PrivateStackParamList>>();

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      onPress={navigation.openDrawer}
      style={({ pressed }) => ({
        opacity: pressed ? 0.75 : 1,
      })}
    >
      <Image
        style={[commonStyles.iconSize_sm, routesStyles.headerIconSpacing]}
        resizeMode="contain"
        source={require('../../../../assets/menu.png')}
      />
    </Pressable>
  );
};
