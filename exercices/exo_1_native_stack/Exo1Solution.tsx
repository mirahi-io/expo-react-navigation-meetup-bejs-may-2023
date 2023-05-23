import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC } from 'react';
import { View } from 'react-native';

import { PrimaryButton, SafeFullScreenView } from '../../src/components';
import { colors, commonStyles } from '../../src/ui';

// Route types
enum BaseRoutes {
  HOME = 'home',
  BROWSE = 'browse',
  CART = 'cart',
}

enum BrowseRoutes {
  CATEGORIES = 'categories',
  CATEGORY = 'category',
  RESTAURANT = 'restaurant',
  FOOD_DETAIL = 'food-detail',
}

type BaseStackParamList = {
  [BaseRoutes.CART]: undefined;
  [BaseRoutes.BROWSE]: undefined;
  [BaseRoutes.HOME]: undefined;
};

type BrowseStackParamList = {
  [BrowseRoutes.CATEGORIES]: undefined;
  [BrowseRoutes.CATEGORY]: undefined;
  [BrowseRoutes.RESTAURANT]: undefined;
  [BrowseRoutes.FOOD_DETAIL]: undefined;
};

type BaseStackScreenProps<T extends BaseRoutes> = NativeStackScreenProps<BaseStackParamList, T>;

type BrowseStackScreenProps<T extends BrowseRoutes> = NativeStackScreenProps<
  BrowseStackParamList,
  T
>;

// Initialize the navigator for the native stack
const Base = createNativeStackNavigator<BaseStackParamList>();

export const Exo1Solution = () => {
  return (
    <Base.Navigator
      initialRouteName={BaseRoutes.HOME}
      screenOptions={{ contentStyle: { backgroundColor: colors.palette.white } }}
    >
      <Base.Screen name={BaseRoutes.HOME} component={HomeScreen} />
      <Base.Screen name={BaseRoutes.BROWSE} component={BrowseStack} />
      <Base.Screen name={BaseRoutes.CART} component={CartScreen} />
    </Base.Navigator>
  );
};

// Initialize the nested navigator for the browse native stack
const Browse = createNativeStackNavigator<BrowseStackParamList>();

const BrowseStack = () => {
  return (
    <Browse.Navigator initialRouteName={BrowseRoutes.CATEGORIES}>
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

const HomeScreen: FC<BaseStackScreenProps<BaseRoutes.HOME>> = ({ navigation: { navigate } }) => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={() => navigate(BaseRoutes.CART)}>Cart</PrimaryButton>
        <PrimaryButton onPress={() => navigate(BaseRoutes.BROWSE)}>Categories</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CartScreen: FC<BaseStackScreenProps<BaseRoutes.CART>> = ({
  navigation: { navigate, goBack },
}) => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={() => navigate(BaseRoutes.HOME)}>Home</PrimaryButton>
        <PrimaryButton onPress={() => navigate(BaseRoutes.BROWSE)}>Categories</PrimaryButton>
        <PrimaryButton onPress={goBack}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CategoriesScreen: FC<BrowseStackScreenProps<BrowseRoutes.CATEGORIES>> = ({
  navigation: { navigate, goBack, pop },
}) => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={() => navigate(BrowseRoutes.CATEGORY)}>Category</PrimaryButton>
        <PrimaryButton onPress={() => pop(2)}>Back 2 screens</PrimaryButton>
        <PrimaryButton onPress={goBack}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const CategoryScreen: FC<BrowseStackScreenProps<BrowseRoutes.CATEGORY>> = ({
  navigation: { navigate, popToTop, goBack },
}) => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={() => navigate(BrowseRoutes.RESTAURANT)}>Restaurant</PrimaryButton>
        <PrimaryButton onPress={popToTop}>Back to initial route</PrimaryButton>
        <PrimaryButton onPress={goBack}>Back</PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const RestaurantScreen: FC<BrowseStackScreenProps<BrowseRoutes.RESTAURANT>> = ({
  navigation: { navigate },
}) => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center}>
        <PrimaryButton onPress={() => navigate(BrowseRoutes.FOOD_DETAIL)}>
          Food Detail
        </PrimaryButton>
      </View>
    </SafeFullScreenView>
  );
};

const FoodDetailScreen: FC<BrowseStackScreenProps<BrowseRoutes.FOOD_DETAIL>> = () => {
  return (
    <SafeFullScreenView>
      <View style={commonStyles.center} />
    </SafeFullScreenView>
  );
};
