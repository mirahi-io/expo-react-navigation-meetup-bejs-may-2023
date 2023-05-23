import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import React from 'react';
import { Image, Platform } from 'react-native';

import { BackButton } from './components/BackButton';
import { DrawerContent } from './components/DrawerContent';
import { DrawerMenuButton } from './components/DrawerMenuButton';
import { routesStyles } from './routes.styles';
import { TabsStack } from './tabs';
import { SafeFullScreenView } from '../../components';
import { ProfileScreen } from '../../screens';
import { PrivateRoutes, PrivateStackParamList, TabsRoutes } from '../../types';
import { colors, commonStyles } from '../../ui';

const drawerScreenBaseOptions: DrawerNavigationOptions = {
  headerTitle: '',
  headerStyle: {
    height: Platform.select({ ios: 104, android: 72 }),
  },
};

const Drawer = createDrawerNavigator<PrivateStackParamList>();

export const DrawerStack = () => {
  return (
    <SafeFullScreenView statusBar={{ style: 'dark', backgroundColor: colors.palette.white }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'front',
          drawerPosition: 'right',
          drawerStyle: {
            width: '100%',
          },
          sceneContainerStyle: {
            backgroundColor: colors.palette.white,
          },
        }}
        drawerContent={DrawerContent}
        initialRouteName={TabsRoutes.HOME}
      >
        <Drawer.Screen
          name={PrivateRoutes.TABS}
          options={{
            ...drawerScreenBaseOptions,
            headerRight: () => <DrawerMenuButton />,
            headerLeft: () => (
              <Image
                resizeMode="contain"
                source={require('../../../assets/header-logo.png')}
                style={[commonStyles.iconSize_md, routesStyles.headerIconSpacing]}
              />
            ),
          }}
          component={TabsStack}
        />
        <Drawer.Screen
          options={{
            ...drawerScreenBaseOptions,
            headerLeft: () => <BackButton />,
          }}
          name={PrivateRoutes.PROFILE}
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </SafeFullScreenView>
  );
};
