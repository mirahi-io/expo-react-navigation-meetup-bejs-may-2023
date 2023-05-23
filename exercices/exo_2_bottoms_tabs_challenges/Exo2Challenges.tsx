import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

// Bottom tabs stack navigator
const BottomTabsStack = createBottomTabNavigator<TabsStackParamsList>();

// Nested native stack
const Browse = createNativeStackNavigator<BrowseStackParamList>();

const BrowseStack = () => {
  return (
    <Browse.Navigator
      initialRouteName={BrowseRoutes.CATEGORIES}
      screenOptions={
        {
          // 🐨 Hide the header in this stack
        }
      }
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

export const Exo2Challenges = () => {
  return (
    <BottomTabsStack.Navigator
      initialRouteName={TabsRoutes.HOME}
      screenOptions={({ route: { name } }) => {
        // 🐨 Display an unique icon for each screen based on the route name
        // let source = require('../../assets/browse.png')
        // <Image source={source} />

        // 💥 Delete this return when you are done
        return {};
      }}
    >
      <BottomTabsStack.Screen name={TabsRoutes.HOME} component={HomeScreen} />
      <BottomTabsStack.Screen name={TabsRoutes.BROWSE} component={BrowseStack} />
      <BottomTabsStack.Screen name={TabsRoutes.CART} component={CartScreen} />
    </BottomTabsStack.Navigator>
  );
};
