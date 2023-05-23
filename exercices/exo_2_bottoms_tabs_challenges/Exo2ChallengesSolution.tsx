import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { ImageSourcePropType } from 'react-native/types';

import {
  CartScreen,
  CategoriesScreen,
  CategoryScreen,
  FoodDetailScreen,
  HomeScreen,
  RestaurantScreen,
} from '../../src/screens';
import {
  BrowseRoutes,
  BrowseStackParamList,
  TabsRoutes,
  TabsStackParamsList,
} from '../../src/types';
import { commonStyles } from '../../src/ui';

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

export const Exo2ChallengesSolution = () => {
  return (
    <BottomTabsStack.Navigator
      initialRouteName={TabsRoutes.HOME}
      screenOptions={({ route }) => {
        let source: ImageSourcePropType;
        // Check the next exercise for another way to set these tabBarIcons
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
        };
      }}
    >
      <BottomTabsStack.Screen name={TabsRoutes.HOME} component={HomeScreen} />
      <BottomTabsStack.Screen name={TabsRoutes.BROWSE} component={BrowseStack} />
      <BottomTabsStack.Screen name={TabsRoutes.CART} component={CartScreen} />
    </BottomTabsStack.Navigator>
  );
};
