import { FC } from 'react';
import { Text, View } from 'react-native';

import { PrimaryButton, SafeFullScreenView } from '../../src/components';
import { commonStyles } from '../../src/ui';

// 🐨 Initialize the navigator for the native stack here

export const Exo1 = () => {
  // 💥 Delete this code below when you are done with the above instructions
  return (
    // 🐨 Return the Navigator and define the Screens here
    <View>
      <Text>Exo 1</Text>
    </View>
  );
};

// 🐨 Use these components for the screens
//   add the correct methods for the buttons to navigate

const HomeScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={undefined}>Cart</PrimaryButton>
        <PrimaryButton onPress={undefined}>Categories</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CategoriesScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={undefined}>Category</PrimaryButton>
        <PrimaryButton onPress={undefined}>Back 2 screens</PrimaryButton>
        <PrimaryButton onPress={undefined}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CartScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={undefined}>Home</PrimaryButton>
        <PrimaryButton onPress={undefined}>Categories</PrimaryButton>
        <PrimaryButton onPress={undefined}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CategoryScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={undefined}>Restaurant</PrimaryButton>
        <PrimaryButton onPress={undefined}>Back to initial route</PrimaryButton>
        <PrimaryButton onPress={undefined}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const RestaurantScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={undefined}>Food Detail</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const FoodDetailScreen: FC = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center} />
    </SafeFullScreenView>
  );
};
