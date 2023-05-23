import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { DrawerItemButton, LogoutModal, SafeFullScreenView } from '../../src/components';
import { DrawerCloseButton } from '../../src/routes/private/components/DrawerCloseButton';
import { DrawerMenuButton } from '../../src/routes/private/components/DrawerMenuButton';
import { routesStyles } from '../../src/routes/private/routes.styles';
import {
  CartScreen,
  CategoriesScreen,
  CategoryScreen,
  FoodDetailScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RestaurantScreen,
} from '../../src/screens';
import { useIdentity } from '../../src/stores';
import {
  BrowseRoutes,
  BrowseStackParamList,
  PrivateRoutes,
  PrivateStackParamList,
  PublicRoutes,
  PublicStackParamsList,
  TabsRoutes,
  TabsStackParamsList,
} from '../../src/types';
import { colors, commonStyles, textStyles } from '../../src/ui';

// Public stack navigator
const Public = createNativeStackNavigator<PublicStackParamsList>();

// Drawer stack navigator
const DrawerStack = createDrawerNavigator<PrivateStackParamList>();

// Bottom tabs stack navigator
const BottomTabsStack = createBottomTabNavigator<TabsStackParamsList>();

// Nested native stack
const Browse = createNativeStackNavigator<BrowseStackParamList>();

const BrowseStack = () => {
  return (
    <Browse.Navigator
      initialRouteName={BrowseRoutes.CATEGORIES}
      screenOptions={{ headerShown: false }}
    >
      <Browse.Screen name={BrowseRoutes.CATEGORIES} component={CategoriesScreen} />
      <Browse.Screen name={BrowseRoutes.CATEGORY} component={CategoryScreen} />
      <Browse.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <Browse.Screen name={BrowseRoutes.RESTAURANT} component={RestaurantScreen} />
        <Browse.Screen name={BrowseRoutes.FOOD_DETAIL} component={FoodDetailScreen} />
      </Browse.Group>
    </Browse.Navigator>
  );
};

const TabsStack = () => {
  return (
    <BottomTabsStack.Navigator
      initialRouteName={TabsRoutes.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../assets/home.png')}
            />
          ),
        }}
        name={TabsRoutes.HOME}
        component={HomeScreen}
      />
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../assets/browse.png')}
            />
          ),
        }}
        name={TabsRoutes.BROWSE}
        component={BrowseStack}
      />
      <BottomTabsStack.Screen
        options={{
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../assets/cart.png')}
            />
          ),
        }}
        name={TabsRoutes.CART}
        component={CartScreen}
      />
    </BottomTabsStack.Navigator>
  );
};

export const Exo3ChallengesSolution = () => {
  const { identity } = useIdentity();

  if (!identity) {
    return (
      <SafeFullScreenView
        statusBar={{ backgroundColor: colors.palette.general.black, style: 'light' }}
      >
        <Public.Navigator initialRouteName={PublicRoutes.LOGIN}>
          <Public.Screen
            options={{ headerShown: false }}
            name={PublicRoutes.LOGIN}
            component={LoginScreen}
          />
        </Public.Navigator>
      </SafeFullScreenView>
    );
  }

  return (
    <DrawerStack.Navigator
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
      initialRouteName={PrivateRoutes.TABS}
      drawerContent={DrawerContent}
    >
      <DrawerStack.Screen
        options={{
          headerTitle: '',
          headerRight: () => <DrawerMenuButton />,
          headerLeft: () => (
            <Image
              resizeMode="contain"
              source={require('../../assets/header-logo.png')}
              style={[commonStyles.iconSize_md, routesStyles.headerIconSpacing]}
            />
          ),
        }}
        name={PrivateRoutes.TABS}
        component={TabsStack}
      />
      <DrawerStack.Screen
        options={{ headerLeft: () => <CustomBackButton /> }}
        name={PrivateRoutes.PROFILE}
        component={ProfileScreen}
      />
    </DrawerStack.Navigator>
  );
};

const CustomBackButton = () => {
  const { goBack, openDrawer } = useNavigation<DrawerNavigationProp<PrivateStackParamList>>();

  const pressHandler = () => {
    goBack();
    openDrawer();
  };

  return (
    <MaterialIcons
      onPress={pressHandler}
      name="arrow-back"
      size={24}
      style={routesStyles.headerIconSpacing}
    />
  );
};

const DrawerContent = () => {
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
