import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CategoriesScreen,
  CategoryScreen,
  FoodDetailScreen,
  RestaurantScreen,
} from '../../screens';
import { BrowseRoutes, BrowseStackParamList } from '../../types';
import { colors } from '../../ui';

const Browse = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseStack = () => {
  return (
    <Browse.Navigator
      initialRouteName={BrowseRoutes.CATEGORIES}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.palette.white },
      }}
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
