import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { DrawerItemButton, SafeFullScreenView } from '../../src/components';
import { BackButton } from '../../src/routes/private/components/BackButton';
import { DrawerCloseButton } from '../../src/routes/private/components/DrawerCloseButton';
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

export const Exo3Challenges = () => {
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
    <DrawerStack.Navigator initialRouteName={PrivateRoutes.TABS} drawerContent={DrawerContent}>
      <DrawerStack.Screen name={PrivateRoutes.TABS} component={TabsStack} />
      <DrawerStack.Screen
        options={{ headerLeft: () => <BackButton /> }}
        name={PrivateRoutes.PROFILE}
        component={ProfileScreen}
      />
    </DrawerStack.Navigator>
  );
};

const DrawerContent = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<PrivateStackParamList>>();
  const status = useDrawerStatus();

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
      </View>
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
