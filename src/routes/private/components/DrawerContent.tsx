import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { DrawerCloseButton } from './DrawerCloseButton';
import { DrawerItemButton, LogoutModal, SafeFullScreenView } from '../../../components';
import { PrivateRoutes, PrivateStackParamList } from '../../../types';
import { colors, textStyles } from '../../../ui';

export const DrawerContent = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<PrivateStackParamList>>();
  const status = useDrawerStatus();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  return (
    <SafeFullScreenView
      containerStyle={styles.container}
      statusBar={
        status === 'closed'
          ? {}
          : {
              backgroundColor: colors.palette.crimson.crimson_60,
              style: 'light',
            }
      }
    >
      <View style={styles.drawerHeader}>
        <DrawerCloseButton />
      </View>
      <View style={styles.drawerBody}>
        <DrawerItemButton onPress={() => navigate(PrivateRoutes.PROFILE)}>Profile</DrawerItemButton>
        <DrawerItemButton onPress={() => setLogoutModalVisible(true)}>Logout</DrawerItemButton>
      </View>
      <LogoutModal onClose={() => setLogoutModalVisible(false)} visible={logoutModalVisible} />
    </SafeFullScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.crimson.crimson_60,
    paddingHorizontal: 20,
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  drawerBody: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 32,
    alignSelf: 'center',
    height: '60%',
    justifyContent: 'center',
  },
  textItem: {
    ...textStyles.h1,
    textTransform: 'uppercase',
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
