import { Text } from 'react-native';

import { SafeFullScreenView } from '../../src/components';

// 🐨 Initialize the bottom tabs stack navigator here

// 🐨 Initialize the nested native stack navigator here

const BrowseStack = () => {
  // 💥 Replace the below code with the nested native stack
  // 🐨 Add the following screens: `CategoriesScreen`, `CategoryScreen`, `RestaurantScreen` and `RestaurantScreen`
  // Be sure to make the `RestaurantScreen` and the `RestaurantScreen` behave as modals
  // The initial screen should be the `CategoriesScreen`
  return (
    <SafeFullScreenView>
      <Text>Hello World!</Text>
    </SafeFullScreenView>
  );
};

export const Exo2 = () => {
  // 💥 Replace the below code with the bottom tabs stack
  // 🐨 Add the following screens: `HomeScreen`, `BrowseStack` and `CartScreen`
  // The initial screen should be the `HomeScreen`
  return (
    <SafeFullScreenView>
      <Text>Hello World!</Text>
    </SafeFullScreenView>
  );
};
