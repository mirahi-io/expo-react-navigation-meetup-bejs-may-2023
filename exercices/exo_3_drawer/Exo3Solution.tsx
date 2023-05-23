import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ImageSourcePropType } from 'react-native/types';

import { DrawerItemButton } from '../../src/components';
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
      screenOptions={({ route }) => {
        let source: ImageSourcePropType;

        if (route.name === TabsRoutes.HOME) {
          source = require('../../assets/home.png');
        } else if (route.name === TabsRoutes.BROWSE) {
          source = require('../../assets/browse.png');
        } else {
          source = require('../../assets/cart.png');
        }

        return {
          tabBarIcon: () => (
            <Image style={commonStyles.iconSize_sm} resizeMode="contain" source={source} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        };
      }}
    >
      <BottomTabsStack.Screen name={TabsRoutes.HOME} component={HomeScreen} />
      <BottomTabsStack.Screen name={TabsRoutes.BROWSE} component={BrowseStack} />
      <BottomTabsStack.Screen name={TabsRoutes.CART} component={CartScreen} />
    </BottomTabsStack.Navigator>
  );
};

export const Exo3Solution = () => {
  const { identity } = useIdentity();

  if (!identity) {
    return (
      <View style={{ flex: 1 }}>
        <Public.Navigator initialRouteName={PublicRoutes.LOGIN}>
          <Public.Screen
            options={{ headerShown: false }}
            name={PublicRoutes.LOGIN}
            component={LoginScreen}
          />
        </Public.Navigator>
      </View>
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

  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <DrawerCloseButton />
      </View>
      <View style={styles.drawerBody}>
        <DrawerItemButton onPress={() => navigate(PrivateRoutes.PROFILE)}>Profile</DrawerItemButton>
      </View>
    </View>
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
